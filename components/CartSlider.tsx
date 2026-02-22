'use client';

import { useCart, CartItem } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { useState } from 'react';

export default function CartSlider() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isOpen, setIsOpen, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-luxe-black/98 backdrop-blur-2xl border-l border-rose-gold/10 z-50 transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-rose-gold/10">
          <div>
            <h2 className="font-display text-xl text-cream">Your Bag</h2>
            <p className="text-xs text-cream/40 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-rose-gold/20 text-rose-gold/60 hover:text-rose-gold hover:border-rose-gold/40 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg className="w-16 h-16 text-rose-gold/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-cream/40 font-body text-sm">Your bag is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-rose-gold text-sm font-body tracking-wider hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item: CartItem) => (
              <div
                key={item.product.id}
                className="glass-card flex gap-4"
                style={{ padding: '1rem' }}
              >
                {/* Product image placeholder */}
                <div className="w-20 h-20 rounded-xl bg-luxe-surface flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <svg className="w-8 h-8 text-rose-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm text-cream truncate">{item.product.name}</h3>
                  <p className="text-rose-gold text-sm font-body mt-1">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full border border-rose-gold/20 flex items-center justify-center text-cream/60 text-xs hover:border-rose-gold/40 transition-all"
                    >
                      −
                    </button>
                    <span className="text-cream/80 text-sm font-body w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-rose-gold/20 flex items-center justify-center text-cream/60 text-xs hover:border-rose-gold/40 transition-all"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="ml-auto text-xs text-cream/30 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-rose-gold/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-cream/60 font-body text-sm">Subtotal</span>
              <span className="text-cream font-display text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-cream/30">Shipping calculated at checkout</p>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full btn-luxe text-center justify-center disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-cream/30 hover:text-cream/60 transition-colors py-2"
            >
              Clear bag
            </button>
          </div>
        )}
      </div>
    </>
  );
}
