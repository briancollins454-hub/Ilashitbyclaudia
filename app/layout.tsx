import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPetals from '@/components/FloatingPetals';

export const metadata: Metadata = {
  title: 'ILash It — Lashes by Claudia | Ballymena',
  description:
    'Premium lash extensions in Ballymena. Classic, Hybrid, Russian & Mega Volume lashes by Claudia — Your lash technician since 2019.',
  keywords: 'lash extensions, Ballymena, classic lashes, hybrid lashes, Russian volume, mega volume, lash lift, lash tint, Claudia',
  openGraph: {
    title: 'ILash It — Lashes by Claudia',
    description: 'Premium lash extensions in Ballymena. Classic, Hybrid, Russian & Mega Volume.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-luxe-black text-cream antialiased">
        <FloatingPetals />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
