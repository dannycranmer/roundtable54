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

/* ── Roundel logo ── */
function RoundelLogo({ className = '' }) {
  return (
    <img
      src="/roundtable54/roundel.png"
      alt="RT54 Roundel"
      className={`h-10 w-10 rounded-full ${className}`}
    />
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
        ? 'text-gold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-crimson after:rounded-full'
        : 'text-grey-light/70 hover:text-gold-light'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-black-rich/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-black-rich/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 lg:px-8 h-16 md:h-[72px]">
          {/* ── Brand ── */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileOpen(false)}
          >
            <RoundelLogo className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105" />
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
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-off-white/80 hover:text-gold transition-colors"
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
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-black-rich shadow-2xl shadow-black/40 transition-transform duration-300 ease-out md:hidden ${
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
                  isActive ? 'text-gold font-semibold' : 'text-grey-light/70 hover:text-gold-light'
                }`
              }
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Motto at bottom of drawer */}
        <p className="absolute bottom-8 left-8 right-8 text-center text-xs text-grey/50 italic font-[family-name:var(--font-display)]">
          Adopt. Adapt. Improve.
        </p>
      </aside>
    </>
  );
}
