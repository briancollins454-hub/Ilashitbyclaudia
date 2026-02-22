'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

/* ─── Intersection Observer hook ─── */
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
   SERVICES DATA
   ═══════════════════════════════════════════════════ */
const services = [
  {
    title: 'Classic Lashes',
    desc: 'One extension per natural lash for a subtle, mascara-like finish. Perfect for everyday elegance.',
    price: '£50',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M16 4c0 0-6 8-6 16s6 8 6 8 6 0 6-8-6-16-6-16z" strokeLinecap="round" />
        <path d="M16 8v16" strokeLinecap="round" strokeDasharray="2 3" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Hybrid Lashes',
    desc: 'A beautiful blend of classic and volume for textured, dimensional fullness with natural charm.',
    price: '£50',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 28c0-10 6-20 6-20s6 10 6 20" strokeLinecap="round" />
        <path d="M13 28c0-8 3-14 3-14s3 6 3 14" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Russian Volume',
    desc: 'Handmade fans of ultra-fine lashes for a dramatic, fluffy, full-bodied look that turns heads.',
    price: '£60',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M16 28V8" strokeLinecap="round" />
        <path d="M12 28c1-8 4-16 4-16" strokeLinecap="round" opacity="0.7" />
        <path d="M20 28c-1-8-4-16-4-16" strokeLinecap="round" opacity="0.7" />
        <path d="M9 28c2-6 7-14 7-14" strokeLinecap="round" opacity="0.4" />
        <path d="M23 28c-2-6-7-14-7-14" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Mega Volume',
    desc: 'The ultimate in lash drama. Ultra-fine, multi-fan technique for a bold, show-stopping statement.',
    price: '£75',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        {[0, -4, 4, -8, 8, -2, 2].map((x, i) => (
          <path key={i} d={`M${16 + x} 28c0-10 ${-x / 2}-16 ${-x / 2}-16`} strokeLinecap="round" opacity={1 - i * 0.1} />
        ))}
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-x-clip">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial"
            style={{ background: 'radial-gradient(circle, rgba(168,191,166,0.08) 0%, transparent 60%)' }} />
          {/* Top vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxe-black via-transparent to-luxe-black" />
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-rose-gold/5 animate-glow-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-rose-gold/8" style={{ animation: 'glowPulse 4s ease-in-out infinite 1s' }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-rose-gold/10" style={{ animation: 'glowPulse 5s ease-in-out infinite 2s' }} />
        </div>

        {/* Sparkle dots — multi-color palette */}
        {[
          { top: '20%', left: '15%', delay: '0s', color: 'bg-rose-gold' },
          { top: '70%', left: '80%', delay: '1s', color: 'bg-blush-pink' },
          { top: '30%', left: '75%', delay: '0.5s', color: 'bg-warm-wood' },
          { top: '80%', left: '20%', delay: '1.5s', color: 'bg-blush-pink' },
          { top: '15%', left: '60%', delay: '2s', color: 'bg-rose-gold' },
          { top: '60%', left: '10%', delay: '0.8s', color: 'bg-warm-wood' },
          { top: '45%', left: '90%', delay: '1.2s', color: 'bg-blush-pink' },
          { top: '85%', left: '55%', delay: '0.3s', color: 'bg-rose-gold' },
        ].map((s, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${s.color} animate-sparkle`}
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center wrapper wrapper-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in stagger-1">
            <div className="gold-line" />
            <span className="text-[11px] tracking-[5px] uppercase text-rose-gold/60 font-body">
              Ballymena&apos;s Premium Lash Studio
            </span>
            <div className="gold-line" />
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6 opacity-0 animate-fade-up stagger-2">
            <span className="text-gradient-gold">Lashes</span>{' '}
            <span className="text-cream/90 italic">that</span>
            <br />
            <span className="text-cream/90">speak for</span>{' '}
            <span className="text-gradient-blush">themselves</span>
          </h1>

          {/* Script accent */}
          <p className="font-script text-3xl md:text-4xl text-rose-gold/50 mb-8 opacity-0 animate-fade-in stagger-3">
            by Claudia
          </p>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-cream/50 font-body font-light max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-up stagger-4">
            Bespoke lash extensions crafted with precision and artistry.
            Classic, Hybrid, Russian Volume &amp; Mega Volume — each set
            tailored uniquely to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-5">
            <Link href="/contact" className="btn-blush">
              Book Your Appointment
            </Link>
            <Link href="/services" className="btn-outline-luxe">
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in stagger-6">
          <span className="text-[10px] tracking-wider uppercase text-cream/20">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-rose-gold/30 to-transparent animate-float" />
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="relative py-32 bg-luxe-gradient">
        <div className="wrapper wrapper-md">
          <Reveal>
            <div className="text-center mb-20">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-4">
                The Art of <span className="text-gradient-blush italic">Beautiful</span> Lashes
              </h2>
              <p className="text-cream/40 font-body max-w-lg mx-auto">
                Every set is a work of art — meticulously applied, perfectly
                styled, uniquely yours.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} className={`stagger-${i + 1}`}>
                <div className="glass-card h-full flex flex-col group" style={{ padding: '2.5rem' }}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full border flex items-center justify-center mb-6 transition-all duration-500 ${
                    i % 3 === 0 ? 'border-rose-gold/20 text-rose-gold/60 group-hover:border-rose-gold/50 group-hover:text-rose-gold' :
                    i % 3 === 1 ? 'border-blush-pink/30 text-blush-pink/70 group-hover:border-blush-pink/60 group-hover:text-blush-pink' :
                    'border-warm-wood/25 text-warm-wood/60 group-hover:border-warm-wood/50 group-hover:text-warm-wood'
                  }`}>
                    {s.icon}
                  </div>
                  {/* Title */}
                  <h3 className="font-display text-xl text-cream/90 mb-3">
                    {s.title}
                  </h3>
                  {/* Desc */}
                  <p className="text-sm text-cream/40 font-body leading-relaxed flex-1 mb-6">
                    {s.desc}
                  </p>
                  {/* Price */}
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-2xl font-display ${i % 3 === 1 ? 'text-blush-pink' : i % 3 === 2 ? 'text-warm-wood' : 'text-rose-gold'}`}>
                      {s.price}
                    </span>
                    <span className="text-xs tracking-wider uppercase text-cream/20">
                      full set
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-14">
              <Link href="/services" className="btn-outline-luxe">
                View All Services &amp; Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SECTION ═══ */}
      <section className="relative py-32 section-glow">
        <div className="wrapper wrapper-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Image placeholder / decorative */}
            <Reveal>
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
                  {/* Gradient placeholder acting as artistic image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxe-card via-luxe-surface to-luxe-dark" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        {/* Decorative flower */}
                        <svg viewBox="0 0 120 120" className="w-full h-full">
                          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, idx) => (
                            <ellipse
                              key={a}
                              cx="60"
                              cy="60"
                              rx="8"
                              ry="22"
                              fill="none"
                              stroke={idx % 3 === 0 ? 'rgba(168,191,166,0.25)' : idx % 3 === 1 ? 'rgba(235,200,207,0.25)' : 'rgba(199,157,136,0.25)'}
                              strokeWidth="0.5"
                              transform={`rotate(${a} 60 60) translate(0 -18)`}
                            />
                          ))}
                          <circle cx="60" cy="60" r="8" fill="rgba(235,200,207,0.2)" />
                          <circle cx="60" cy="60" r="4" fill="rgba(199,157,136,0.35)" />
                        </svg>
                      </div>
                      <span className="font-script text-4xl text-rose-gold/30">ILash It</span>
                    </div>
                  </div>
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-3xl border border-rose-gold/10" />
                </div>
                {/* Experience badge — positioned below image */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="glass-card flex items-center gap-4" style={{ padding: '1.5rem 2rem' }}>
                    <span className="font-display text-4xl text-rose-gold">7+</span>
                    <div>
                      <p className="text-sm text-cream/70 font-display leading-tight">Years of</p>
                      <p className="text-sm text-cream/70 font-display leading-tight">Experience</p>
                    </div>
                  </div>
                  <div className="glass-card flex items-center gap-4 flex-1" style={{ padding: '1.5rem 2rem' }}>
                    <span className="font-display text-4xl text-blush-pink">339+</span>
                    <div>
                      <p className="text-sm text-cream/70 font-display leading-tight">Happy</p>
                      <p className="text-sm text-cream/70 font-display leading-tight">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — Content */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="gold-line" />
                  <span className="text-[11px] tracking-[4px] uppercase text-rose-gold/60">
                    Why Choose Claudia
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-6 leading-tight">
                  Where precision meets{' '}
                  <span className="text-gradient-warm italic">passion</span>
                </h2>
                <p className="text-cream/40 font-body leading-relaxed mb-8">
                  Since 2019, I&apos;ve dedicated myself to the art of lash
                  extensions. Every appointment is a one-on-one experience in
                  a calm, private setting — no rushing, no compromises. Just
                  beautiful lashes, every single time.
                </p>

                {/* Features */}
                <div className="space-y-5">
                  {[
                    {
                      title: 'Certified & Experienced',
                      desc: 'Fully trained lash technician with years of hands-on expertise.',
                    },
                    {
                      title: 'Premium Products Only',
                      desc: 'High-quality, lightweight lashes that protect your natural lashes.',
                    },
                    {
                      title: 'One-to-One Sessions',
                      desc: 'Private, relaxed appointments focused entirely on you.',
                    },
                    {
                      title: 'Tailored to You',
                      desc: 'Every set is designed to complement your eye shape and style.',
                    },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        i % 3 === 0 ? 'border-rose-gold/20 group-hover:border-rose-gold/50' :
                        i % 3 === 1 ? 'border-blush-pink/25 group-hover:border-blush-pink/50' :
                        'border-warm-wood/20 group-hover:border-warm-wood/50'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-colors ${
                          i % 3 === 0 ? 'bg-rose-gold/40 group-hover:bg-rose-gold' :
                          i % 3 === 1 ? 'bg-blush-pink/50 group-hover:bg-blush-pink' :
                          'bg-warm-wood/40 group-hover:bg-warm-wood'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-display text-base text-cream/80 mb-1">
                          {f.title}
                        </h4>
                        <p className="text-sm text-cream/35 font-body">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ PRICING HIGHLIGHTS ═══ */}
      <section className="relative py-32 bg-luxe-gradient">
        <div className="wrapper wrapper-md">
          <Reveal>
            <div className="text-center mb-16">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-4">
                Investment in <span className="text-gradient-blush italic">You</span>
              </h2>
              <p className="text-cream/40 font-body max-w-md mx-auto">
                Premium results at honest prices. Your confidence is priceless.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'Lash Lift + Tint', full: '£40', infill: null, duration: '45–60 min', color: 'warm-wood' },
              { name: 'Classic Lashes', full: '£50', infill: '£40', duration: '1.5–2 hrs', color: 'rose-gold' },
              { name: 'Hybrid Lashes', full: '£50', infill: '£40', duration: '2 hrs', color: 'blush-pink' },
              { name: 'Russian Volume', full: '£60', infill: '£45', duration: '2–2.5 hrs', color: 'rose-gold' },
              { name: 'Mega Volume', full: '£75', infill: '£65', duration: '2.5–3 hrs', color: 'blush-pink' },
            ].map((row, i) => (
              <Reveal key={i}>
                <div style={{ padding: '2.5rem' }} className={`glass-card h-full flex flex-col ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none' : ''
                }`}>
                  <h3 className="font-display text-lg text-cream/90 mb-1">{row.name}</h3>
                  <p className="text-xs text-cream/30 font-body mb-5">{row.duration}</p>
                  <div className="flex items-end justify-between gap-6 mt-auto pt-4 border-t border-rose-gold/8">
                    <div>
                      <p className="text-[10px] tracking-wider uppercase text-cream/30 mb-1">Full Set</p>
                      <p className={`font-display text-2xl ${
                        row.color === 'rose-gold' ? 'text-rose-gold' :
                        row.color === 'blush-pink' ? 'text-blush-pink' : 'text-warm-wood'
                      }`}>{row.full}</p>
                    </div>
                    {row.infill && (
                      <div className="text-right">
                        <p className="text-[10px] tracking-wider uppercase text-cream/30 mb-1">Infill</p>
                        <p className="font-display text-xl text-cream/55">{row.infill}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline-luxe">
                Full Price List &amp; Details
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ TESTIMONIAL / SOCIAL PROOF ═══ */}
      <section className="relative py-32 section-glow overflow-x-clip">
        <div className="wrapper wrapper-sm">
          <Reveal>
            <div className="text-center">
              <div className="section-divider mb-8">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              {/* Large quote */}
              <div className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-8xl text-blush-pink/20">
                  &ldquo;
                </div>
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-cream/80 italic leading-relaxed mb-8 px-4">
                  Claudia is absolutely incredible at what she does. My lashes
                  have never looked so good — I get compliments everywhere I go.
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-pink/25 to-warm-wood/10 flex items-center justify-center">
                    <span className="font-display text-sm text-warm-wood">S</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-cream/60 font-body">Sarah M.</p>
                    <p className="text-xs text-cream/30 font-body">Loyal client since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-20 pt-16 border-t border-rose-gold/5">
              {[
                { number: '4', label: 'Lash Styles' },
                { number: '100%', label: 'Dedication' },
                { number: '5★', label: 'Quality' },
              ].map((stat, i) => (
                <div key={i} className="text-center px-2">
                  <p className={`font-display text-2xl sm:text-3xl md:text-4xl ${
                    i === 0 ? 'text-rose-gold' : i === 1 ? 'text-blush-pink' : 'text-warm-wood'
                  }`}>
                    {stat.number}
                  </p>
                  <p className="text-[10px] sm:text-xs tracking-wider uppercase text-cream/30 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ LASH LIFT SECTION ═══ */}
      <section className="relative py-32 bg-luxe-gradient">
        <div className="wrapper wrapper-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="gold-line" />
                  <span className="text-[11px] tracking-[4px] uppercase text-rose-gold/60">
                    Also Available
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-6 leading-tight">
                  Lash Lift <span className="text-blush-pink">&amp;</span>{' '}
                  <span className="text-gradient-warm italic">Tint</span>
                </h2>
                <p className="text-cream/40 font-body leading-relaxed mb-6">
                  Not ready for extensions? A lash lift and tint gives your
                  natural lashes a beautiful curl and deeper colour — no
                  maintenance needed. Wake up looking effortlessly polished
                  for weeks.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-display text-4xl text-warm-wood">£40</span>
                  <div className="w-[1px] h-8 bg-warm-wood/20" />
                  <div>
                    <p className="text-sm text-cream/50">Lasts 6–8 weeks</p>
                    <p className="text-xs text-cream/30">No daily upkeep required</p>
                  </div>
                </div>
                <Link href="/contact" className="btn-blush">
                  Book a Lash Lift
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden relative bg-luxe-card border border-rose-gold/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Decorative eye illustration */}
                    <svg viewBox="0 0 200 120" className="w-3/4 opacity-20">
                      <path
                        d="M10 60 Q100 10 190 60 Q100 110 10 60Z"
                        fill="none"
                        stroke="rgba(168,191,166,0.5)"
                        strokeWidth="1"
                      />
                      <circle cx="100" cy="60" r="20" fill="none" stroke="rgba(168,191,166,0.4)" strokeWidth="1" />
                      <circle cx="100" cy="60" r="8" fill="rgba(168,191,166,0.2)" />
                      {/* Upper lashes */}
                      {[-40, -30, -20, -10, 0, 10, 20, 30, 40].map((x, i) => (
                        <line
                          key={i}
                          x1={100 + x}
                          y1={60 - Math.sqrt(900 - (x * x) * 0.6)}
                          x2={100 + x * 1.3}
                          y2={60 - Math.sqrt(900 - (x * x) * 0.6) - 12}
                          stroke="rgba(168,191,166,0.3)"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM / GALLERY CTA ═══ */}
      <section className="relative py-32 section-glow">
        <div className="wrapper wrapper-md">
          <Reveal>
            <div className="text-center mb-14">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-4">
                Follow the <span className="text-gradient-blush italic">Journey</span>
              </h2>
              <p className="text-cream/40 font-body max-w-md mx-auto">
                See the latest lash transformations, behind-the-scenes moments, and client results on Instagram.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { gradient: 'from-blush-pink/10 to-warm-wood/5', label: 'Classic', icon: '✨' },
                { gradient: 'from-rose-gold/10 to-blush-pink/5', label: 'Hybrid', icon: '🌸' },
                { gradient: 'from-warm-wood/10 to-rose-gold/5', label: 'Volume', icon: '💫' },
                { gradient: 'from-rose-gold/8 to-warm-wood/5', label: 'Mega', icon: '🌟' },
              ].map((item, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/ilash__it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-rose-gold/10 hover:border-rose-gold/30 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 bg-luxe-card/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xs tracking-wider uppercase text-cream/50 font-body">{item.label}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/[0.04] transition-all duration-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cream/0 group-hover:text-cream/40 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com/ilash__it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-warm"
              >
                @ilash__it on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ REFERRAL BANNER ═══ */}
      <section className="relative py-20">
        <div className="wrapper wrapper-sm">
          <Reveal>
            <div className="glass-card text-center relative overflow-clip" style={{ padding: '3rem' }}>
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(235,200,207,0.12) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(199,157,136,0.10) 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                <span className="text-[11px] tracking-[4px] uppercase text-rose-gold/60 block mb-4">
                  Referral Reward
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream/90 mb-4">
                  Love Your Lashes?{' '}
                  <span className="text-gradient-blush italic">Share the Love</span>
                </h2>
                <p className="text-cream/40 font-body max-w-lg mx-auto mb-6">
                  Refer 3 friends and enjoy{' '}
                  <span className="text-blush-pink font-semibold">30% off</span>{' '}
                  your next appointment. Beautiful lashes for you, beautiful
                  lashes for them.
                </p>
                <Link href="/contact" className="btn-luxe">
                  Learn More
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-32 bg-luxe-gradient">
        <div className="wrapper wrapper-sm text-center">
          <Reveal>
            <div className="section-divider mb-8">
              <div className="line" />
              <div className="diamond" />
              <div className="line" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-cream/90 mb-6">
              Ready for your{' '}
              <span className="text-gradient-blush italic">best</span> lashes?
            </h2>
            <p className="text-cream/40 font-body max-w-md mx-auto mb-10">
              Book your appointment today and experience the ILash It
              difference. Your perfect lashes are just a message away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-blush">
                Book Now
              </Link>
              <a
                href="https://www.instagram.com/ilash__it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-warm"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
