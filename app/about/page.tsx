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

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{
              background:
                'radial-gradient(circle, rgba(168,191,166,0.06) 0%, transparent 60%)',
            }}
          />
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in">
            <div className="gold-line" />
            <span className="text-[11px] tracking-[5px] uppercase text-rose-gold/60 font-body">
              About
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-cream/90 mb-6 opacity-0 animate-fade-up stagger-2">
            Meet <span className="text-gradient-blush italic">Claudia</span>
          </h1>
          <p className="text-cream/40 font-body max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-3">
            The artist, the perfectionist, the lash obsessive behind ILash It.
          </p>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-24 bg-luxe-gradient">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Decorative portrait placeholder */}
            <Reveal>
              <div className="relative mb-6 sm:mb-8">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-luxe-card border border-rose-gold/10 relative">
                  {/* Artistic gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxe-surface via-luxe-card to-luxe-dark" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* Decorative floral wreath */}
                      <div className="w-48 h-48 mx-auto relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Outer ring of petals */}
                          {Array.from({ length: 16 }, (_, i) => i * 22.5).map(
                            (a, idx) => (
                              <ellipse
                                key={a}
                                cx="100"
                                cy="100"
                                rx="6"
                                ry="18"
                                fill="none"
                                stroke={idx % 3 === 0 ? 'rgba(168,191,166,0.2)' : idx % 3 === 1 ? 'rgba(235,200,207,0.2)' : 'rgba(199,157,136,0.2)'}
                                strokeWidth="0.5"
                                transform={`rotate(${a} 100 100) translate(0 -35)`}
                              />
                            )
                          )}
                          {/* Inner petals */}
                          {Array.from({ length: 8 }, (_, i) => i * 45).map(
                            (a, idx) => (
                              <ellipse
                                key={`inner-${a}`}
                                cx="100"
                                cy="100"
                                rx="5"
                                ry="14"
                                fill="none"
                                stroke={idx % 2 === 0 ? 'rgba(235,200,207,0.3)' : 'rgba(168,191,166,0.3)'}
                                strokeWidth="0.5"
                                transform={`rotate(${a} 100 100) translate(0 -20)`}
                              />
                            )
                          )}
                          {/* Center */}
                          <circle
                            cx="100"
                            cy="100"
                            r="12"
                            fill="rgba(235,200,207,0.15)"
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="6"
                            fill="rgba(199,157,136,0.25)"
                          />
                        </svg>
                      </div>
                      <p className="font-script text-3xl text-blush-pink/35 mt-4">
                        Claudia
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent badge */}
                <div className="mt-4 inline-flex glass-card" style={{ padding: '1.25rem 2rem' }}>
                  <div>
                    <span className="font-display text-2xl text-warm-wood">
                      2019
                    </span>
                    <p className="text-xs text-cream/40">Est.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — Story */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="gold-line" />
                  <span className="text-[11px] tracking-[4px] uppercase text-rose-gold/60">
                    My Story
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-6 leading-tight">
                  A passion that became a{' '}
                  <span className="text-gradient-warm italic">profession</span>
                </h2>
                <div className="space-y-4 text-cream/40 font-body leading-relaxed">
                  <p>
                    What started as a fascination with beauty and detail has
                    grown into something I pour my whole heart into. I began my
                    lash journey in 2019 and haven&apos;t looked back since — every
                    client, every set, every appointment has only deepened my
                    love for this craft.
                  </p>
                  <p>
                    Based in Ballymena, I work from a calm, private home studio
                    where it&apos;s just you and me. No salon noise, no distractions —
                    just a relaxing experience and a set of lashes you&apos;ll
                    absolutely love.
                  </p>
                  <p>
                    I believe everyone deserves to feel confident and beautiful.
                    Whether you&apos;re after a subtle, natural enhancement or
                    full-on mega volume drama, I take the time to understand
                    what you want and deliver it with precision.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-32 section-glow">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl text-cream/90 mb-4">
                What I <span className="text-gradient-blush italic">Stand For</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Quality Over Quantity',
                desc: 'I only use premium, lightweight lashes and adhesives. Your natural lashes are precious — I treat them that way.',
              },
              {
                num: '02',
                title: 'Honest & Transparent',
                desc: 'From pricing to aftercare, what you see is what you get. No hidden fees, no upselling — just honest, beautiful work.',
              },
              {
                num: '03',
                title: 'Your Comfort Comes First',
                desc: 'Your appointment is your time to relax. I ensure every session is calm, comfortable, and enjoyable from start to finish.',
              },
            ].map((v, i) => (
              <Reveal key={i}>
                <div className="glass-card h-full relative group" style={{ padding: '2.5rem' }}>
                  <span className={`font-display text-5xl absolute top-6 right-6 transition-colors duration-500 ${
                    i === 0 ? 'text-rose-gold/10 group-hover:text-rose-gold/25' :
                    i === 1 ? 'text-blush-pink/10 group-hover:text-blush-pink/25' :
                    'text-warm-wood/10 group-hover:text-warm-wood/25'
                  }`}>
                    {v.num}
                  </span>
                  <h3 className="font-display text-xl text-cream/80 mb-4 mt-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-cream/35 font-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY TIMELINE ═══ */}
      <section className="py-32 bg-luxe-gradient">
        <div className="max-w-3xl mx-auto px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="section-divider mb-6">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
              </div>
              <h2 className="font-display text-4xl text-cream/90 mb-4">
                The <span className="text-gradient-warm italic">Journey</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blush-pink/25 to-transparent" />

            {[
              {
                year: '2019',
                title: 'The Beginning',
                desc: 'Completed lash extension certification and started offering classic lashes to friends and family.',
              },
              {
                year: '2020',
                title: 'Building a Reputation',
                desc: 'Word spread. Launched on Instagram and Facebook. Began offering hybrid lashes alongside classics.',
              },
              {
                year: '2021',
                title: 'Volume Mastery',
                desc: 'Trained in Russian Volume techniques. The demand grew and the studio diary got busier.',
              },
              {
                year: '2023',
                title: 'Full Menu',
                desc: 'Added Mega Volume and Lash Lift & Tint to the menu. A complete lash destination in Ballymena.',
              },
              {
                year: '2026',
                title: 'Still Growing',
                desc: 'Hundreds of happy clients later, every appointment still feels like a privilege. The best is yet to come.',
              },
            ].map((item, i) => (
              <Reveal key={i}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse md:text-right'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2">
                    <div className={`w-3 h-3 rounded-full border ${
                      i % 3 === 0 ? 'bg-rose-gold/30 border-rose-gold/50' :
                      i % 3 === 1 ? 'bg-blush-pink/35 border-blush-pink/55' :
                      'bg-warm-wood/30 border-warm-wood/50'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <span className="font-display text-sm text-rose-gold/60 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl text-cream/80 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/35 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REFERRAL CALLOUT ═══ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <Reveal>
            <div className="glass-card text-center relative overflow-clip" style={{ padding: '3rem' }}>
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(168,191,166,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <span className="text-[11px] tracking-[4px] uppercase text-rose-gold/60 block mb-4">
                  Refer & Reward
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream/90 mb-4">
                  Bring your girls,{' '}
                  <span className="text-gradient-blush italic">save 30%</span>
                </h2>
                <p className="text-cream/40 font-body max-w-lg mx-auto mb-6">
                  Refer 3 friends and enjoy 30% off your next treatment.
                  Because beautiful lashes are better shared.
                </p>
                <Link href="/contact" className="btn-luxe">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-luxe-gradient">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Reveal>
            <div className="section-divider mb-8">
              <div className="line" />
              <div className="diamond" />
              <div className="line" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream/90 mb-6">
              Let&apos;s create something{' '}
              <span className="text-gradient-blush italic">beautiful</span>
            </h2>
            <p className="text-cream/40 font-body max-w-md mx-auto mb-10">
              I&apos;d love to welcome you to my studio. Book your appointment
              and let&apos;s find your perfect lash style.
            </p>
            <Link href="/contact" className="btn-blush">
              Book Now
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
