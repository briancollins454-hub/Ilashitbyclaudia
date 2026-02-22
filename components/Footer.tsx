import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-luxe-dark border-t border-rose-gold/10">
      {/* Rose gold marquee */}
      <div className="overflow-hidden py-4 border-b border-rose-gold/5">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {[
                'Classic Lashes',
                'Hybrid Lashes',
                'Russian Volume',
                'Mega Volume',
                'Lash Lift & Tint',
                'Infills',
                'Ballymena',
                'Since 2019',
              ].map((item, j) => (
                <span key={j} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[4px] uppercase text-rose-gold/30 font-body">
                    {item}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    j % 3 === 0 ? 'bg-rose-gold/25' : j % 3 === 1 ? 'bg-blush-pink/30' : 'bg-warm-wood/25'
                  }`} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper wrapper-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-script text-3xl text-rose-gold">ILash It</span>
              <p className="text-[10px] tracking-[3px] uppercase text-cream/30 mt-1">
                Lashes by Claudia
              </p>
            </div>
            <p className="text-sm text-cream/40 leading-relaxed max-w-xs">
              Premium lash extensions in Ballymena. Enhancing your natural beauty
              with meticulous attention to detail since 2019.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/ilashitbyclaudia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-blush-pink/20 flex items-center justify-center text-blush-pink/50 hover:border-blush-pink/60 hover:text-blush-pink hover:bg-blush-pink/5 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ilash__it"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-warm-wood/20 flex items-center justify-center text-warm-wood/50 hover:border-warm-wood/60 hover:text-warm-wood hover:bg-warm-wood/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[3px] uppercase text-rose-gold/60 mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services & Pricing' },
                { href: '/shop', label: 'Shop' },
                { href: '/about', label: 'About Claudia' },
                { href: '/contact', label: 'Book Now' },
                { href: '/terms', label: 'Terms & Conditions' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/40 hover:text-rose-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[3px] uppercase text-rose-gold/60 mb-6">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rose-gold/50 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
                <span className="text-sm text-cream/40">Ballymena, Northern Ireland</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rose-gold/50 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-cream/40">By appointment only</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rose-gold/50 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span className="text-sm text-cream/40">DM on Instagram or Facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-rose-gold/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20">
            © {new Date().getFullYear()} ILash It by Claudia. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            Crafted by{' '}
            <a
              href="https://thesupportsdesk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-gold/40 hover:text-rose-gold transition-colors"
            >
              The Supports Desk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
