/* ═══════════════════════════════════════════════════
   PRODUCT CATALOGUE
   
   To add/edit/remove products, just update this array.
   Each product needs:
   - id: unique string (used for Stripe)
   - name: product name
   - price: price in pence (£10 = 1000)
   - description: short description
   - image: URL to product image (or placeholder)
   - category: for filtering
   - inStock: true/false
   ═══════════════════════════════════════════════════ */

export interface Product {
  id: string;
  name: string;
  price: number; // in pence
  description: string;
  image: string;
  category: 'aftercare' | 'accessories' | 'gift-sets' | 'tools';
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'lash-cleanser',
    name: 'Lash Foam Cleanser',
    price: 1200,
    description: 'Gentle oil-free foam cleanser specially formulated for lash extensions. Keeps lashes clean and lasting longer.',
    image: '/products/lash-cleanser.jpg',
    category: 'aftercare',
    inStock: true,
    featured: true,
  },
  {
    id: 'lash-brush-set',
    name: 'Lash Spoolie Brush Set',
    price: 500,
    description: 'Pack of 5 reusable spoolie brushes for daily lash grooming. Keep your extensions fluffy and separated.',
    image: '/products/lash-brush.jpg',
    category: 'tools',
    inStock: true,
  },
  {
    id: 'lash-serum',
    name: 'Lash Growth Serum',
    price: 2500,
    description: 'Nourishing serum that promotes natural lash growth and strength. Perfect for use between extension sets.',
    image: '/products/lash-serum.jpg',
    category: 'aftercare',
    inStock: true,
    featured: true,
  },
  {
    id: 'silk-pillowcase',
    name: 'Silk Pillowcase',
    price: 2200,
    description: 'Luxury mulberry silk pillowcase that protects your lash extensions while you sleep. Reduces friction and tangling.',
    image: '/products/silk-pillowcase.jpg',
    category: 'accessories',
    inStock: true,
    featured: true,
  },
  {
    id: 'aftercare-kit',
    name: 'Lash Aftercare Kit',
    price: 2000,
    description: 'Complete aftercare bundle including cleanser, brushes, and a microfibre cloth. Everything you need.',
    image: '/products/aftercare-kit.jpg',
    category: 'gift-sets',
    inStock: true,
  },
  {
    id: 'cleansing-brush',
    name: 'Lash Cleansing Brush',
    price: 800,
    description: 'Soft-bristle cleansing brush designed to gently clean around lash extensions without pulling.',
    image: '/products/cleansing-brush.jpg',
    category: 'tools',
    inStock: true,
  },
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'aftercare', label: 'Aftercare' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'gift-sets', label: 'Gift Sets' },
  { value: 'tools', label: 'Tools' },
];

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
