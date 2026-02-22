import { NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-01-28.clover',
  });
}

export const dynamic = 'force-dynamic';

async function sendOrderNotification(session: Stripe.Checkout.Session) {
  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shipping = (session as any).shipping_details;
  const address = shipping?.address;
  const total = session.amount_total ? `£${(session.amount_total / 100).toFixed(2)}` : 'Unknown';

  await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `ILash It Shop — New Order! (${total})`,
      from_name: 'ILash It Shop',
      'Customer Name': shipping?.name || 'N/A',
      'Customer Email': session.customer_details?.email || 'N/A',
      'Order Total': total,
      'Items': session.metadata?.items_summary || 'See Stripe dashboard',
      'Shipping Address': address
        ? `${address.line1}${address.line2 ? ', ' + address.line2 : ''}, ${address.city}, ${address.postal_code}, ${address.country}`
        : 'N/A',
      'Stripe Payment ID': session.payment_intent || session.id,
    }),
  });
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const body = await req.text();

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Retrieve full session with shipping details
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['shipping_details'],
    });

    await sendOrderNotification(fullSession);
  }

  return NextResponse.json({ received: true });
}
