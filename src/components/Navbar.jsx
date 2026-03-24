import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

/* ── Simplified Round Table shield / circular emblem ── */
function ShieldIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="24" cy="24" r="22" stroke="#c5a44e" strokeWidth="2.5" />
      {/* Inner ring */}
      <circle cx="24" cy="24" r="17" stroke="#c5a44e" strokeWidth="1.2" opacity="0.6" />
      {/* Table top — horizontal ellipse */}
      <ellipse cx="24" cy="26" rx="12" ry="4" stroke="#c5a44e" strokeWidth="1.5" fill="#c5a44e" fillOpacity="0.15" />
      {/* Crown / top motif */}
      <path
        d="M18 16l3-4 3 3 3-3 3 4"
        stroke="#c5a44e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Table leg */}
      <line x1="24" y1="30" x2="24" y2="38" stroke="#c5a44e" strokeWidth="1.5" strokeLinecap="round" />
      {/* Base */}
      <line x1="19" y1="38" x2="29" y2="38" stroke="#c5a44e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  /* Show / hide on scroll direction + add background when scrolled */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastScrollY.current);
      setScrolled(y > 20);
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative py-1 text-sm tracking-wide uppercase transition-colors duration-200 ${
      isActive
        ? 'text-gold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-gold after:rounded-full'
        : 'text-cream/70 hover:text-gold-light'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-navy/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 lg:px-8 h-16 md:h-[72px]">
          {/* ── Brand ── */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileOpen(false)}
          >
            <ShieldIcon className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-[family-name:var(--font-display)] text-gold text-xl md:text-2xl font-bold tracking-wide">
              RT54
            </span>
          </NavLink>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Hamburger button ── */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-cream/80 hover:text-gold transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{mobileOpen ? 'Close' : 'Menu'}</span>
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-navy-light shadow-2xl shadow-black/40 transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-24 px-8 gap-2">
          {links.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-3 text-lg tracking-wide border-b border-white/5 transition-colors duration-200 ${
                  isActive ? 'text-gold font-semibold' : 'text-cream/70 hover:text-gold-light'
                }`
              }
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Motto at bottom of drawer */}
        <p className="absolute bottom-8 left-8 right-8 text-center text-xs text-slate/50 italic font-[family-name:var(--font-display)]">
          Adopt. Adapt. Improve.
        </p>
      </aside>
    </>
  );
}
