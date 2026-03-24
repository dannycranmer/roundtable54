import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { events } from '../data/events';

/* Pick the first 3 non-social events for the featured section */
const featured = events.filter((e) => e.category !== 'social').slice(0, 3);

/* ── Decorative circular emblem watermark ── */
function EmblemWatermark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="190" stroke="#c5a44e" strokeWidth="2" opacity="0.12" />
      <circle cx="200" cy="200" r="170" stroke="#c5a44e" strokeWidth="1" opacity="0.08" />
      <circle cx="200" cy="200" r="150" stroke="#c5a44e" strokeWidth="0.5" opacity="0.06" />
      {/* Cross / compass lines */}
      <line x1="200" y1="30" x2="200" y2="370" stroke="#c5a44e" strokeWidth="0.5" opacity="0.06" />
      <line x1="30" y1="200" x2="370" y2="200" stroke="#c5a44e" strokeWidth="0.5" opacity="0.06" />
      <line x1="80" y1="80" x2="320" y2="320" stroke="#c5a44e" strokeWidth="0.5" opacity="0.04" />
      <line x1="320" y1="80" x2="80" y2="320" stroke="#c5a44e" strokeWidth="0.5" opacity="0.04" />
      {/* Crown motif at top */}
      <path
        d="M160 100 l15-25 25 20 25-20 15 25"
        stroke="#c5a44e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      {/* Table shape */}
      <ellipse cx="200" cy="220" rx="70" ry="22" stroke="#c5a44e" strokeWidth="1.2" opacity="0.08" fill="#c5a44e" fillOpacity="0.03" />
      <line x1="200" y1="242" x2="200" y2="290" stroke="#c5a44e" strokeWidth="1.2" opacity="0.08" />
      <line x1="170" y1="290" x2="230" y2="290" stroke="#c5a44e" strokeWidth="1.2" opacity="0.08" />
      {/* Outer decorative dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 200 + 180 * Math.cos(angle);
        const cy = 200 + 180 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="3" fill="#c5a44e" opacity="0.08" />;
      })}
    </svg>
  );
}

/* ── Inline SVG Icons for the cards ── */
function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="20" x2="42" y2="20" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="6" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="28" r="2" fill="currentColor" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
      <circle cx="32" cy="28" r="2" fill="currentColor" />
      <circle cx="16" cy="36" r="2" fill="currentColor" />
      <circle cx="24" cy="36" r="2" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <path
        d="M24 42S6 30 6 18a10 10 0 0118-6 10 10 0 0118 6c0 12-18 24-18 24z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M17 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
      <circle cx="18" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M6 38c0-7.2 5.4-12 12-12s12 4.8 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M36 26c4.5 1 8 4.5 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Category badge colour ── */
function categoryColor(cat) {
  switch (cat) {
    case 'flagship': return 'bg-gold text-navy';
    case 'charity': return 'bg-royal text-cream';
    default: return 'bg-navy-light text-cream';
  }
}

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy noise-bg geo-pattern overflow-hidden">
        {/* Watermark emblem */}
        <EmblemWatermark className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a1628_80%)] z-[2] pointer-events-none" />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Small eyebrow */}
          <p className="animate-fade-in text-gold/70 text-xs sm:text-sm uppercase tracking-[0.35em] mb-6">
            Est. 1927&ensp;&middot;&ensp;King's Lynn, Norfolk
          </p>

          {/* Main title */}
          <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
            <span className="gold-shimmer">King's Lynn</span>
            <br />
            <span className="text-cream">Round Table&nbsp;54</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up mt-6 font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl text-gold-light/80 italic tracking-wide" style={{ animationDelay: '0.15s' }}>
            Fellowship. Service. Community.
          </p>

          {/* Description */}
          <p className="animate-fade-up mt-6 text-cream/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.3s' }}>
            We're a group of men aged 18-45 who believe life is better when you give back.
            From legendary food festivals to quiet acts of community service, we make King's Lynn
            a better place — and have a damn good time doing it.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mt-10" style={{ animationDelay: '0.45s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/20"
            >
              Join Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/50 text-gold text-sm uppercase tracking-wider rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-200"
            >
              Upcoming Events
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in mt-16 md:mt-24 flex flex-col items-center gap-2 text-gold/40" style={{ animationDelay: '1s' }}>
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT WE DO — 3 Cards
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
        {/* Faint diagonal accent */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Round Table is about more than meetings. It's about making memories, raising money, and raising the bar."
          />

          <div className="reveal grid md:grid-cols-3 gap-6 lg:gap-10 mt-4">
            {/* Card: Community Events */}
            <div className="group relative bg-white rounded-sm p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-2 border-transparent hover:border-gold">
              <div className="text-gold mb-6"><CalendarIcon /></div>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-navy mb-3">
                Community Events
              </h3>
              <p className="text-slate leading-relaxed">
                From our legendary Gin Festival to the King's Lynn Food Festival, we put on
                events the whole town looks forward to. Great food, great music, great people.
              </p>
            </div>

            {/* Card: Charity Work */}
            <div className="group relative bg-white rounded-sm p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-2 border-transparent hover:border-gold">
              <div className="text-gold mb-6"><HeartIcon /></div>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-navy mb-3">
                Charity Work
              </h3>
              <p className="text-slate leading-relaxed">
                100% of the money we raise goes directly to local causes. No admin fees,
                no overheads — just real money making a real difference in our community.
              </p>
            </div>

            {/* Card: Brotherhood */}
            <div className="group relative bg-white rounded-sm p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-2 border-transparent hover:border-gold">
              <div className="text-gold mb-6"><UsersIcon /></div>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-navy mb-3">
                Brotherhood
              </h3>
              <p className="text-slate leading-relaxed">
                Lifelong friendships forged over shared adventures. BBQs, sports days,
                international trips, and the kind of stories you can't tell your boss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-navy noise-bg py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light/40 to-navy pointer-events-none z-[2]" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: '100%', label: 'To Local Causes' },
              { value: 'Since 1927', label: 'Heritage' },
              { value: '18–45', label: 'Age Range' },
              { value: '65+', label: 'Countries Worldwide' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-none">
                  {value}
                </span>
                <span className="mt-3 text-sm sm:text-base text-cream/50 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED EVENTS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Big things are happening. Here's what's next on the calendar."
          />

          <div className="reveal grid md:grid-cols-3 gap-6 lg:gap-8 mt-4">
            {featured.map((evt) => (
              <article
                key={evt.id}
                className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Coloured top bar */}
                <div className="h-1 bg-gradient-to-r from-gold to-gold-light" />

                <div className="p-7 lg:p-8">
                  {/* Category + Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm ${categoryColor(evt.category)}`}>
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-lg lg:text-xl font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                    {evt.title}
                  </h3>

                  <div className="flex flex-col gap-1 text-sm text-slate mb-4">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {evt.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {evt.location}
                    </span>
                  </div>

                  <p className="text-slate/80 text-sm leading-relaxed line-clamp-3">
                    {evt.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Link to full events page */}
          <div className="reveal text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-royal hover:text-gold transition-colors duration-200"
            >
              View All Events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          JOIN CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-cream via-gold-pale/40 to-cream">
        {/* Subtle decorative circle */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border border-gold/10 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] rounded-full border border-gold/5 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="reveal">
            {/* Gold line ornament */}
            <div className="flex items-center justify-center mb-6">
              <span className="block w-12 h-px bg-gold/40" />
              <span className="block w-2 h-2 rotate-45 border border-gold/60 mx-4" />
              <span className="block w-12 h-px bg-gold/40" />
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Ready to Do More?
            </h2>

            <p className="mt-6 text-slate text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              If you're a man aged 18-45 who wants to make friends, make a difference,
              and make the most of life — we'd love to hear from you. No stuffy interviews,
              no secret handshakes. Just good people doing good things.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/20"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-navy/20 text-navy text-sm uppercase tracking-wider rounded-sm hover:border-navy/40 hover:bg-navy/5 transition-all duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
