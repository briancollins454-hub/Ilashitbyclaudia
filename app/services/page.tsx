'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('animate-fade-up');
          el.classList.remove('opacity-0', 'translate-y-8');
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 ${className}`}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   FULL SERVICES DATA
   ═══════════════════════════════════════════════════ */
const services = [
  {
    title: 'Classic Lashes',
    desc: 'One premium extension per natural lash, creating a subtle, mascara-like finish. Ideal for a naturally enhanced look that\'s effortlessly polished.',
    fullSet: '£50',
    infill: '£40',
    duration: '1.5–2 hours',
    infillDuration: '45–60 min',
    features: ['Natural look', 'Lightweight feel', 'Great for first-timers'],
  },
  {
    title: 'Hybrid Lashes',
    desc: 'The perfect marriage of classic and volume techniques. A textured, dimensional finish that adds fullness while maintaining a natural charm.',
    fullSet: '£50',
    infill: '£40',
    duration: '2 hours',
    infillDuration: '60 min',
    features: ['Textured & wispy', 'Dimensional depth', 'Best of both worlds'],
  },
  {
    title: 'Russian Volume',
    desc: 'Handmade fans of ultra-fine lashes applied to each natural lash. Dramatic, fluffy, and full-bodied — for those who love a bit more impact.',
    fullSet: '£60',
    infill: '£45',
    duration: '2–2.5 hours',
    infillDuration: '60–75 min',
    features: ['Full & fluffy', 'Lightweight fans', 'Dramatic but soft'],
  },
  {
    title: 'Mega Volume',
    desc: 'The ultimate in lash drama. Multiple ultra-fine lashes fanned per natural lash for a bold, show-stopping, red-carpet-ready statement.',
    fullSet: '£75',
    infill: '£65',
    duration: '2.5–3 hours',
    infillDuration: '75–90 min',
    features: ['Maximum drama', 'Ultra-full coverage', 'Statement look'],
  },
  {
    title: 'Lash Lift & Tint',
    desc: 'Enhance your natural lashes with a semi-permanent curl and rich tint. Perfect for those who want a low-maintenance yet stunning everyday look.',
    fullSet: '£40',
    infill: '—',
    duration: '45–60 min',
    infillDuration: '—',
    features: ['No extensions needed', 'Lasts 6–8 weeks', 'Zero maintenance'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-x-clip">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{ background: 'radial-gradient(circle, rgba(168,191,166,0.06) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in">
            <div className="gold-line" />
            <span className="text-[11px] tracking-[5px] uppercase text-rose-gold/60 font-body">
              Services & Pricing
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-cream/90 mb-6 opacity-0 animate-fade-up stagger-2">
            Treatments <span className="text-gradient-blush italic">&amp; Pricing</span>
          </h1>
          <p className="text-cream/40 font-body max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-3">
            Every service is delivered with precision, premium products, and
            a dedication to bringing out your most beautiful self.
          </p>
        </div>
      </section>

      {/* ═══ SERVICES CARDS ═══ */}
      <section className="py-20 bg-luxe-gradient">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {services.map((s, i) => (
            <Reveal key={i}>
              <div className="glass-card p-8 md:p-10 group">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-start">
                  {/* Left content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="font-display text-2xl md:text-3xl text-cream/90">
                        {s.title}
                      </h2>
                      {i === 3 && (
                        <span className="text-[10px] tracking-wider uppercase px-4 py-1 rounded-full border border-blush-pink/40 text-blush-pink bg-blush-pink/5">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-cream/40 font-body leading-relaxed mb-6 max-w-2xl">
                      {s.desc}
                    </p>
                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {s.features.map((f, j) => (
                        <span
                          key={j}
                          className={`text-xs tracking-wider uppercase px-4 py-2 rounded-full border ${
                            j % 3 === 0 ? 'bg-rose-gold/5 border-rose-gold/10 text-cream/50' :
                            j % 3 === 1 ? 'bg-blush-pink/5 border-blush-pink/15 text-cream/50' :
                            'bg-warm-wood/5 border-warm-wood/10 text-cream/50'
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — Pricing */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:min-w-0 lg:min-w-[180px]">
                    <div className={`text-center p-6 rounded-2xl border ${
                      i % 3 === 0 ? 'bg-rose-gold/[0.03] border-rose-gold/10' :
                      i % 3 === 1 ? 'bg-blush-pink/[0.05] border-blush-pink/15' :
                      'bg-warm-wood/[0.04] border-warm-wood/10'
                    }`}>
                      <span className={`text-xs tracking-wider uppercase block mb-2 ${
                        i % 3 === 0 ? 'text-rose-gold/50' : i % 3 === 1 ? 'text-blush-pink/60' : 'text-warm-wood/50'
                      }`}>
                        Full Set
                      </span>
                      <span className={`font-display text-3xl ${
                        i % 3 === 0 ? 'text-rose-gold' : i % 3 === 1 ? 'text-blush-pink' : 'text-warm-wood'
                      }`}>
                        {s.fullSet}
                      </span>
                      <p className="text-xs text-cream/30 mt-1">{s.duration}</p>
                    </div>
                    {s.infill !== '—' && (
                      <div className="text-center p-5 rounded-2xl border border-rose-gold/5">
                        <span className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                          Infill
                        </span>
                        <span className="font-display text-2xl text-cream/60">
                          {s.infill}
                        </span>
                        <p className="text-xs text-cream/20 mt-1">{s.infillDuration}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ IMPORTANT INFO ═══ */}
      <section className="py-32 section-glow">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl text-cream/90 mb-4">
                Before Your <span className="text-gradient-warm italic">Appointment</span>
              </h2>
              <p className="text-cream/40 font-body max-w-md mx-auto">
                A few things to know to help your session go smoothly.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⏱',
                title: 'Patch Test Required',
                desc: 'A patch test is required 48 hours before your first appointment. This is for your safety and is non-negotiable.',
              },
              {
                icon: '📅',
                title: '24hr Cancellation Policy',
                desc: 'Cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may forfeit the booking fee.',
              },
              {
                icon: '💰',
                title: 'Booking Fee',
                desc: 'A non-refundable booking fee is required to secure your appointment. This is deducted from your treatment total.',
              },
              {
                icon: '🔄',
                title: 'Infill Requirements',
                desc: 'At least 40% of your extensions must remain for an infill. Less than 40% will require a full set appointment.',
              },
              {
                icon: '💳',
                title: 'Payment Methods',
                desc: 'Cash, PayPal, and bank transfer accepted. Payment is due at the end of your appointment.',
              },
              {
                icon: '✨',
                title: 'Aftercare',
                desc: 'Detailed aftercare guidance is provided to ensure your lashes stay beautiful for as long as possible.',
              },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="glass-card p-7 h-full">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display text-lg text-cream/80 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/35 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-luxe-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="section-divider mb-8">
              <div className="line" />
              <div className="diamond" />
              <div className="line" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-6">
              Found your <span className="text-gradient-blush italic">perfect</span> style?
            </h2>
            <p className="text-cream/40 font-body max-w-md mx-auto mb-10">
              Get in touch to book your appointment. I can&apos;t wait to create
              your dream lashes.
            </p>
            <Link href="/contact" className="btn-blush">
              Book Your Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
