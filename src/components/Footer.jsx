import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function FacebookIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function XIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black-rich text-grey-light/80">
      {/* Gold accent line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* ── About column ── */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gold mb-4">
              Round Table 54
            </h3>
            <p className="text-sm leading-relaxed text-grey-light/60 mb-5 max-w-xs">
              King&rsquo;s Lynn &amp; District Round Table 54 &mdash; a social and charitable
              community for men aged 18&ndash;45. We raise funds, make friends, and have a
              brilliant time doing it.
            </p>
            <p className="font-[family-name:var(--font-display)] text-gold-light/80 italic text-sm tracking-wide">
              &ldquo;Adopt. Adapt. Improve.&rdquo;
            </p>
          </div>

          {/* ── Quick Links column ── */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-grey-light/60 hover:text-white-pure transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect column ── */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gold mb-4">
              Connect
            </h3>
            <p className="text-sm text-grey-light/60 mb-5">
              Follow us for event updates, photos, and the occasional questionable banter.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/RoundTable54KL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-grey-light/10 flex items-center justify-center text-grey-light/50 hover:text-crimson hover:border-crimson/40 transition-all duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/roundtable54"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-grey-light/10 flex items-center justify-center text-grey-light/50 hover:text-crimson hover:border-crimson/40 transition-all duration-200"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-grey-light/40">
          <p>&copy; 2026 King&rsquo;s Lynn &amp; District Round Table 54. All rights reserved.</p>
          <p>
            Part of{' '}
            <a
              href="https://roundtable.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-light/50 hover:text-white-pure transition-colors duration-200 underline underline-offset-2"
            >
              Round Table
            </a>{' '}
            &mdash; roundtable.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}
