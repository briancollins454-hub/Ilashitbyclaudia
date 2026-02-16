'use client';

import Link from 'next/link';

const circleColors = [
  'border-rose-gold/25 text-rose-gold/60',     // 1
  'border-blush-pink/30 text-blush-pink/70',    // 2
  'border-warm-wood/25 text-warm-wood/60',      // 3
  'border-rose-gold/25 text-rose-gold/60',      // 4
  'border-blush-pink/30 text-blush-pink/70',    // 5
  'border-warm-wood/25 text-warm-wood/60',      // 6
  'border-rose-gold/25 text-rose-gold/60',      // 7
  'border-blush-pink/30 text-blush-pink/70',    // 8
  'border-warm-wood/25 text-warm-wood/60',      // 9
  'border-blush-pink/30 text-blush-pink/70',    // 10
];

export default function TermsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
            style={{
              background:
                'radial-gradient(circle, rgba(235,200,207,0.06) 0%, transparent 60%)',
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <span className="text-[11px] tracking-[5px] uppercase text-rose-gold/60 font-body">
              Legal
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-cream/90 mb-4">
            Terms &amp; <span className="text-gradient-warm italic">Conditions</span>
          </h1>
          <p className="text-cream/40 font-body text-sm">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="py-16 bg-luxe-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card p-8 md:p-12 space-y-10">

            {/* Payment */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[0]}`}>1</span>
                Payment
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  Payment is due at the end of each appointment unless
                  otherwise agreed. Accepted methods of payment include
                  <strong className="text-cream/60"> cash, PayPal, and bank transfer</strong>.
                </p>
                <p>
                  Please ensure you bring the correct amount if paying by cash,
                  as change may not always be available.
                </p>
              </div>
            </div>

            {/* Patch Test */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[1]}`}>2</span>
                Patch Test
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  A <strong className="text-cream/60">patch test is mandatory 48 hours before your first appointment</strong>.
                  This applies to all new clients and is essential to ensure
                  you do not have an allergic reaction to the adhesive or
                  products used.
                </p>
                <p>
                  No patch test = no appointment. This is non-negotiable and
                  is for your safety.
                </p>
              </div>
            </div>

            {/* Cancellation */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[2]}`}>3</span>
                Cancellation Policy
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  I require a minimum of <strong className="text-cream/60">24 hours&apos; notice</strong> for
                  cancellations or rescheduling. Late cancellations or no-shows
                  may result in the forfeiture of your booking fee.
                </p>
                <p>
                  If you are running late, please contact me as soon as possible.
                  Excessive lateness may result in a shortened or rescheduled
                  appointment.
                </p>
              </div>
            </div>

            {/* Booking Fee */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[3]}`}>4</span>
                Booking Fee
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  A <strong className="text-cream/60">non-refundable booking fee</strong> is
                  required to secure your appointment. This fee will be
                  deducted from your total treatment cost on the day.
                </p>
                <p>
                  The booking fee secures your time slot and is non-transferable
                  and non-refundable in all circumstances.
                </p>
              </div>
            </div>

            {/* Refunds */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[4]}`}>5</span>
                Refund Policy
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  Due to the nature of the service, <strong className="text-cream/60">no refunds</strong> are
                  offered once a treatment has been completed. If you are
                  unhappy with any aspect of your lashes, please get in touch
                  within 48 hours and I will do my best to resolve the issue.
                </p>
              </div>
            </div>

            {/* Health & Safety */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[5]}`}>6</span>
                Health &amp; Safety
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  Clients must be <strong className="text-cream/60">18 years or older</strong>.
                  Under-18s may be treated with written guardian consent only.
                </p>
                <p>
                  Please disclose any eye conditions, allergies, or recent eye
                  surgery before your appointment. I reserve the right to
                  refuse treatment if I believe it may not be safe.
                </p>
                <p>
                  Please note that this is a home-based studio. A cat, a partner,
                  and children reside in the household.
                </p>
              </div>
            </div>

            {/* Visitors */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[6]}`}>7</span>
                Visitors &amp; Children
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  For the comfort and safety of all clients, <strong className="text-cream/60">no visitors or
                  children</strong> are permitted during your appointment. This
                  ensures a calm, relaxing environment and allows me to give
                  you my full attention.
                </p>
              </div>
            </div>

            {/* Infills */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[7]}`}>8</span>
                Infill Policy
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  A minimum of <strong className="text-cream/60">40% of your lash extensions must
                  remain</strong> in order to qualify for an infill. If fewer than
                  40% remain, a full set will be required and charged accordingly.
                </p>
              </div>
            </div>

            {/* Aftercare */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[8]}`}>9</span>
                Aftercare
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  Aftercare instructions will be provided at the end of each
                  appointment. Following these guidelines is essential for the
                  longevity and health of your lash extensions. I cannot be held
                  responsible for premature lash loss due to failure to follow
                  aftercare advice.
                </p>
              </div>
            </div>

            {/* Referral */}
            <div>
              <h2 className="font-display text-xl text-cream/80 mb-4 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${circleColors[9]}`}>10</span>
                Referral Discount
              </h2>
              <div className="space-y-3 text-sm text-cream/40 font-body leading-relaxed pl-11">
                <p>
                  Refer <strong className="text-cream/60">3 friends</strong> who
                  book and attend an appointment, and you will receive{' '}
                  <strong className="text-cream/60">30% off</strong> your next
                  treatment. Referrals must mention your name at the time of
                  booking to qualify.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider py-4">
              <div className="line" />
              <div className="diamond" />
              <div className="line" />
            </div>

            <p className="text-xs text-cream/25 font-body text-center leading-relaxed">
              By booking an appointment with ILash It by Claudia, you
              acknowledge that you have read, understood, and agree to these
              Terms &amp; Conditions. If you have any questions, please don&apos;t
              hesitate to get in touch before booking.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-blush">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
