'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const { totalItems, setIsOpen } = useCart();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Book Now' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-luxe-black/90 backdrop-blur-xl border-b border-rose-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Floral icon */}
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* Petals */}
              {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                <ellipse
                  key={angle}
                  cx="20"
                  cy="20"
                  rx="4"
                  ry="9"
                  fill="none"
                  stroke={idx % 3 === 0 ? 'rgba(168,191,166,0.6)' : idx % 3 === 1 ? 'rgba(235,200,207,0.5)' : 'rgba(199,157,136,0.5)'}
                  strokeWidth="0.8"
                  transform={`rotate(${angle} 20 20) translate(0 -7)`}
                  className="transition-all duration-500 group-hover:stroke-rose-gold"
                />
              ))}
              <circle cx="20" cy="20" r="3" fill="rgba(235,200,207,0.45)" className="transition-all duration-500 group-hover:fill-rose-gold" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-script text-2xl text-rose-gold leading-none">
              ILash It
            </span>
            <span className="text-[9px] tracking-[3px] uppercase text-cream/40 font-body">
              by Claudia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-body tracking-widest uppercase text-cream/60 hover:text-rose-gold transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          {/* Cart icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative ml-2 p-2 text-cream/60 hover:text-rose-gold transition-colors"
            aria-label="Shopping bag"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-blush-pink text-white text-[9px] flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/contact" className="btn-luxe text-xs ml-4">
            Book a Session
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-[1.5px] bg-rose-gold transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-rose-gold transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-rose-gold transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-luxe-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-rose-gold text-2xl"
          aria-label="Close"
        >
          ✕
        </button>
        
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-display text-cream/80 hover:text-rose-gold transition-colors tracking-wider"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {link.label}
          </Link>
        ))}
        <div className="section-divider mt-4">
          <div className="line" />
          <div className="diamond" />
          <div className="line" />
        </div>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="btn-luxe"
        >
          Book a Session
        </Link>
      </div>
    </header>
  );
}
