'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';

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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f01cf5e3-4c8a-4389-82c2-0f354a2ed3e5',
          subject: `ILash It — New enquiry from ${form.name}`,
          from_name: 'ILash It Website',
          ...form,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-luxe-card border border-rose-gold/10 rounded-xl px-5 py-4 text-cream/80 font-body text-sm placeholder:text-cream/20 focus:outline-none focus:border-rose-gold/30 focus:ring-1 focus:ring-rose-gold/10 transition-all duration-300';

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

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in">
            <div className="gold-line" />
            <span className="text-[11px] tracking-[5px] uppercase text-rose-gold/60 font-body">
              Get in Touch
            </span>
            <div className="gold-line" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-cream/90 mb-6 opacity-0 animate-fade-up stagger-2">
            Book Your <span className="text-gradient-blush italic">Session</span>
          </h1>
          <p className="text-cream/40 font-body max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-3">
            Ready for your dream lashes? Send me a message and I&apos;ll get
            back to you to confirm your appointment.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT FORM + INFO ═══ */}
      <section className="py-20 bg-luxe-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-12">
            {/* Form */}
            <Reveal>
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-display text-2xl text-cream/90 mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-sm text-cream/35 font-body mb-8">
                  Fill in the form below and I&apos;ll be in touch to arrange
                  your appointment.
                </p>

                {status === 'sent' ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-gold/10 border border-rose-gold/30 flex items-center justify-center">
                      <svg className="w-7 h-7 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-cream/90 mb-3">
                      Message Sent
                    </h3>
                    <p className="text-cream/40 font-body mb-6">
                      Thank you! I&apos;ll get back to you as soon as possible
                      to confirm your appointment.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-outline-luxe text-xs"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="Your phone number"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                          Service *
                        </label>
                        <select
                          required
                          value={form.service}
                          onChange={(e) =>
                            setForm({ ...form, service: e.target.value })
                          }
                          className={`${inputClass} appearance-none cursor-pointer`}
                        >
                          <option value="">Select a service</option>
                          <option value="Classic Lashes">Classic Lashes — £50</option>
                          <option value="Hybrid Lashes">Hybrid Lashes — £50</option>
                          <option value="Russian Volume">Russian Volume — £60</option>
                          <option value="Mega Volume">Mega Volume — £75</option>
                          <option value="Lash Lift & Tint">Lash Lift &amp; Tint — £40</option>
                          <option value="Infill">Infill</option>
                          <option value="Not Sure">Not sure — need advice</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs tracking-wider uppercase text-cream/30 block mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Any preferred dates/times, questions, or anything else you'd like me to know..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-body">
                        Something went wrong. Please try again or DM me on
                        Instagram instead.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-luxe w-full justify-center disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.4 31.4" strokeLinecap="round" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Enquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info Cards */}
            <div className="space-y-6">
              <Reveal>
                <div className="glass-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-rose-gold/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg text-cream/80">Location</h3>
                  </div>
                  <p className="text-sm text-cream/40 font-body">
                    Home-based studio in Ballymena, Northern Ireland. Full
                    address provided upon booking confirmation.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="glass-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-blush-pink/25 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blush-pink/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg text-cream/80">Hours</h3>
                  </div>
                  <p className="text-sm text-cream/40 font-body">
                    By appointment only. I offer flexible scheduling to fit
                    around your life.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="glass-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-warm-wood/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-warm-wood/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg text-cream/80">Instagram</h3>
                  </div>
                  <a
                    href="https://www.instagram.com/ilash__it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-wood/70 hover:text-warm-wood font-body transition-colors"
                  >
                    @ilash__it →
                  </a>
                  <p className="text-xs text-cream/30 font-body mt-2">
                    DM for quick responses &amp; lash inspo
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="glass-card p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-blush-pink/25 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blush-pink/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg text-cream/80">Facebook</h3>
                  </div>
                  <a
                    href="https://www.facebook.com/ilashitbyclaudia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blush-pink/70 hover:text-blush-pink font-body transition-colors"
                  >
                    ILash It — Lashes by Claudia →
                  </a>
                </div>
              </Reveal>

              {/* Important notes */}
              <Reveal>
                <div className="glass-card p-7 border-warm-wood/15">
                  <h3 className="font-display text-base text-warm-wood/80 mb-3">
                    Before Booking
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Patch test required 48hrs before first appointment',
                      'A booking fee is required to secure your slot',
                      '24hr cancellation policy applies',
                    ].map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-cream/35 font-body">
                        <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                          i === 0 ? 'bg-rose-gold/40' : i === 1 ? 'bg-blush-pink/50' : 'bg-warm-wood/40'
                        }`} />
                        {note}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/terms"
                    className="text-xs text-warm-wood/50 hover:text-warm-wood font-body mt-4 inline-block transition-colors"
                  >
                    View full Terms &amp; Conditions →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
