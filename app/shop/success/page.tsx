'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(168,191,166,0.15),transparent_60%)]" />
      </div>

      <div className="relative wrapper wrapper-sm text-center">
        <div className="glass-card" style={{ padding: '3rem' }}>
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full bg-sage-400/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-3xl text-cream mb-3">
            Order Confirmed!
          </h1>
          <p className="text-cream/50 font-body leading-relaxed mb-2">
            Thank you for your purchase. You&apos;ll receive a confirmation email shortly with your order details.
          </p>
          <p className="text-cream/40 font-body text-sm mb-8">
            If you have any questions about your order, don&apos;t hesitate to get in touch.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-luxe text-xs">
              Continue Shopping
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-xs tracking-wider uppercase font-body bg-white/60 text-cream/60 border border-rose-gold/10 hover:border-rose-gold/30 hover:text-rose-gold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
