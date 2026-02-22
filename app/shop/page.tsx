'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { products, categories, formatPrice, Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';

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

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="glass-card group flex flex-col h-full relative" style={{ padding: '0' }}>
      {/* Popular badge — outside the clipped image area */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-rose-gold text-white text-sm font-bold tracking-wider uppercase font-body shadow-lg">
          Popular
        </div>
      )}
      {/* Image area */}
      <div className="relative aspect-square rounded-t-[20px] bg-luxe-surface overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-rose-gold/20 group-hover:text-rose-gold/30 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-luxe-black/40 flex items-center justify-center">
            <span className="text-white font-body text-sm tracking-wider">Sold Out</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1" style={{ padding: '1.5rem' }}>
        <span className="text-[10px] tracking-[2px] uppercase text-rose-gold/60 font-body mb-2">
          {product.category.replace('-', ' ')}
        </span>
        <h3 className="font-display text-lg text-cream leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-cream/50 font-body leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose-gold/10">
          <span className="font-display text-xl text-rose-gold">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            disabled={!product.inStock || added}
            className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase font-body font-semibold transition-all duration-300 ${
              added
                ? 'bg-sage-400 text-white'
                : product.inStock
                ? 'bg-rose-gold/10 text-rose-gold border border-rose-gold/20 hover:bg-rose-gold hover:text-white'
                : 'bg-cream/5 text-cream/20 cursor-not-allowed'
            }`}
          >
            {added ? '✓ Added' : product.inStock ? 'Add to Bag' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { totalItems, setIsOpen } = useCart();

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-x-clip">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(168,191,166,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(235,200,207,0.10),transparent_50%)]" />
        </div>

        <div className="relative wrapper wrapper-md text-center">
          <Reveal>
            <span className="inline-block text-[11px] tracking-[4px] uppercase text-rose-gold/60 font-body mb-4">
              ILash It Shop
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-6">
              Shop Lash <span className="font-script text-rose-gold">Essentials</span>
            </h1>
            <p className="text-cream/50 font-body text-lg max-w-xl mx-auto leading-relaxed">
              Handpicked aftercare products and accessories to keep your lashes looking flawless between appointments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ SHOP CONTENT ═══ */}
      <section className="relative pb-32">
        <div className="wrapper wrapper-md">
          {/* Filters + Cart Button */}
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-5 py-2.5 rounded-full text-sm tracking-wider uppercase font-body font-medium transition-all duration-300 ${
                      activeCategory === cat.value
                        ? 'bg-rose-gold text-white'
                        : 'bg-white/60 text-cream/60 border border-rose-gold/10 hover:border-rose-gold/30 hover:text-rose-gold'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-rose-gold/10 text-rose-gold border border-rose-gold/20 hover:bg-rose-gold hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-body font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                View Bag
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blush-pink text-white text-[10px] flex items-center justify-center font-body">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </Reveal>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <Reveal key={product.id} className={`delay-${i * 100}`}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-cream/40 font-body text-lg">No products in this category yet.</p>
            </div>
          )}

          {/* Info Banner */}
          <Reveal>
            <div className="glass-card mt-16 text-center" style={{ padding: '3rem' }}>
              <h3 className="font-display text-2xl text-cream mb-3">
                Need Advice?
              </h3>
              <p className="text-cream/50 font-body max-w-lg mx-auto mb-6">
                Not sure which products are right for your lashes? Drop me a message and I&apos;ll recommend the perfect aftercare routine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-luxe text-xs">
                  Get in Touch
                </Link>
                <a
                  href="https://www.instagram.com/ilash__it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs tracking-wider uppercase font-body bg-white/60 text-cream/60 border border-rose-gold/10 hover:border-rose-gold/30 hover:text-rose-gold transition-all duration-300"
                >
                  DM on Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
