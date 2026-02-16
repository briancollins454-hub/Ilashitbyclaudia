'use client';

import { useEffect, useState } from 'react';

/* ─── Leaf color palette ─── */
const LEAF_COLORS = [
  { fill: 'rgba(168,191,166,0.55)', stroke: 'rgba(139,166,130,0.70)' },  // Sage
  { fill: 'rgba(235,200,207,0.55)', stroke: 'rgba(210,160,175,0.70)' },  // Blush Pink
  { fill: 'rgba(199,157,136,0.50)', stroke: 'rgba(175,130,110,0.65)' },  // Warm Wood
  { fill: 'rgba(196,212,191,0.45)', stroke: 'rgba(168,191,166,0.60)' },  // Light Sage
  { fill: 'rgba(235,200,207,0.45)', stroke: 'rgba(199,157,136,0.60)' },  // Blush-Wood blend
];

/* ─── SVG leaf paths (variety of shapes) ─── */
const LEAF_SHAPES = [
  // Classic pointed leaf
  'M10 0 Q15 10 10 24 Q5 10 10 0Z',
  // Rounded leaf
  'M8 0 C14 4 16 14 8 24 C0 14 2 4 8 0Z',
  // Slim elegant leaf
  'M6 0 Q10 8 8 24 Q2 8 6 0Z',
  // Wider botanical leaf
  'M10 0 C18 6 18 18 10 26 C2 18 2 6 10 0Z',
  // Asymmetric natural leaf
  'M8 0 C15 5 14 16 8 24 C3 16 2 5 8 0Z',
];

interface Leaf {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  startRotation: number;
  opacity: number;
  colorIdx: number;
  shapeIdx: number;
  swayAmount: number;
}

export default function FloatingPetals() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generated: Leaf[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 24,
      delay: Math.random() * 18,
      duration: 16 + Math.random() * 14,
      startRotation: Math.random() * 360,
      opacity: 0.8 + Math.random() * 0.2,
      colorIdx: i % LEAF_COLORS.length,
      shapeIdx: i % LEAF_SHAPES.length,
      swayAmount: 40 + Math.random() * 80,
    }));
    setLeaves(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((l) => {
        const color = LEAF_COLORS[l.colorIdx];
        return (
          <div
            key={l.id}
            className="absolute animate-leaf-drift"
            style={{
              left: `${l.left}%`,
              animationDelay: `${l.delay}s`,
              animationDuration: `${l.duration}s`,
              ['--sway' as string]: `${l.swayAmount}px`,
            }}
          >
            <svg
              width={l.size}
              height={l.size * 1.4}
              viewBox="0 0 20 28"
              style={{
                transform: `rotate(${l.startRotation}deg)`,
                opacity: l.opacity,
              }}
            >
              <path
                d={LEAF_SHAPES[l.shapeIdx]}
                fill={color.fill}
                stroke={color.stroke}
                strokeWidth="0.8"
              />
              {/* Leaf vein */}
              <line
                x1="10" y1="2" x2="10" y2="20"
                stroke={color.stroke}
                strokeWidth="0.5"
                opacity="0.7"
              />
            </svg>
          </div>
        );
      })}

      {/* Ambient glow orbs — soft colored glows behind content */}
      <div
        className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(168,191,166,0.10) 0%, transparent 65%)' }}
      />
      <div
        className="absolute top-[45%] right-[15%] w-[450px] h-[450px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(235,200,207,0.10) 0%, transparent 65%)', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(199,157,136,0.08) 0%, transparent 65%)', animationDelay: '4s' }}
      />
      <div
        className="absolute top-[70%] left-[10%] w-[350px] h-[350px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(235,200,207,0.07) 0%, transparent 65%)', animationDelay: '3s' }}
      />
    </div>
  );
}
