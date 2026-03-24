import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from '../components/SectionHeading';

const pastMeetings = [
  {
    year: '2025',
    location: 'Wolfsburg, Germany',
    description: 'VW factory tour and much more',
    image: '/roundtable54/images/euromeeting/wolfsburg-2025.jpg',
  },
  {
    year: '2022',
    location: "King's Lynn",
    description: 'Post-COVID celebration — bringing the fellowship home',
    image: null,
  },
  {
    year: '2008',
    location: '75th Anniversary Dinner',
    description: "Kings Lynn and District Round Table 54, 75th Anniversary Dinner",
    image: '/roundtable54/images/euromeeting/75th-1.jpg',
  },
  {
    year: '2006',
    location: 'Thuin, Belgium',
    description: 'The enchanting year of 2006, nestled in the picturesque town of Thuin',
    image: null,
  },
  {
    year: '2004',
    location: 'Flight of Fancy',
    description: 'An adventure to remember',
    image: null,
  },
  {
    year: '2003',
    location: 'Kristinehamn, Sweden',
    description: 'Discovering Kristinehamn',
    image: '/roundtable54/images/euromeeting/kristinehamn-1.jpg',
  },
];

export default function EuroMeeting() {
  useScrollReveal();

  return (
    <main>
      {/* ═══════════════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-black-rich noise-bg spoke-pattern overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#111111_85%)] z-[2] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p className="animate-fade-in text-gold/60 text-xs uppercase tracking-[0.35em] mb-5">
            International Fellowship
          </p>

          <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.05] tracking-tight">
            EuroMeeting
          </h1>

          {/* Gold decorative line */}
          <div className="animate-fade-up flex items-center justify-center mt-8" style={{ animationDelay: '0.15s' }}>
            <span className="block w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="animate-fade-up mt-6 text-off-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.25s' }}>
            Where Round Table 54 chapters from across the world come together
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT IS A EUROMEETING?
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-off-white py-24 md:py-32 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left — large display heading */}
            <div className="lg:col-span-2">
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Fellowship</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-black-rich leading-tight">
                What is a<br />EuroMeeting?
              </h2>
              {/* Decorative vertical line */}
              <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mt-8" />
            </div>

            {/* Right — narrative */}
            <div className="lg:col-span-3 space-y-6 text-grey-light leading-relaxed">
              <p className="text-black-rich text-lg sm:text-xl font-medium leading-snug">
                The Round Table is an organisation for young men founded in Norwich, England, in 1927 by Louis Marchesi.
              </p>
              <p>
                Today it has 30,000+ active members, known as Tablers, from over 65 countries. Each country numbers its
                tables sequentially — so there are Round Table 54 chapters in multiple countries.
              </p>
              <p>
                EuroMeetings bring these matching-numbered tables together for a weekend of festivities, activities, and the
                kind of friendships that transcend borders and languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NEXT EUROMEETING
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-black-rich noise-bg spoke-pattern py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-black-soft/30 to-black-rich pointer-events-none z-[2]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal text-center mb-16">
            <div className="flex items-center justify-center mb-5">
              <span className="block w-8 h-px bg-gold/40" />
              <span className="block w-2 h-2 rotate-45 border border-gold/60 mx-3" />
              <span className="block w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-off-white tracking-tight">
              2026 EuroMeeting
            </h2>
            <p className="mt-4 text-gold text-lg sm:text-xl font-medium">
              Auch, France
            </p>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <p className="text-off-white/50 leading-relaxed">
                The 2026 EuroMeeting heads to the south of France, where our French counterparts at Table Ronde 54
                will host Tablers from across Europe in the historic town of Auch. Expect incredible food, fine wine,
                Gascon hospitality, and the kind of weekend that legends are made of.
              </p>
              <p className="text-off-white/50 leading-relaxed">
                Whether you're a seasoned EuroMeeting veteran or a first-timer, Auch promises an unforgettable
                celebration of international fellowship and the enduring bonds of Round Table.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="/roundtable54/images/euromeeting/auch-2026.png"
                alt="2026 EuroMeeting — Auch, France"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-rich/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PAST EUROMEETINGS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-off-white py-24 md:py-32 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            title="Past EuroMeetings"
            subtitle="Cherished memories of friendship and fellowship, in the true Round Table style"
          />

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto mt-4">
            {/* Vertical centre line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {pastMeetings.map((meeting, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div key={meeting.year} className="reveal relative">
                    {/* Dot on centre line (desktop only) */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-gold border-4 border-off-white shadow-sm" />

                    <div className={`md:grid md:grid-cols-2 md:gap-12 ${isLeft ? '' : 'md:direction-rtl'}`}>
                      {/* Content card */}
                      <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`} style={{ direction: 'ltr' }}>
                        <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">{meeting.year}</span>
                        <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mt-2 mb-3">
                          {meeting.location}
                        </h3>
                        <p className="text-grey-light leading-relaxed">{meeting.description}</p>

                        {meeting.image && (
                          <div className="mt-5 rounded-sm overflow-hidden shadow-lg">
                            <img
                              src={meeting.image}
                              alt={`${meeting.year} — ${meeting.location}`}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {/* Empty column for spacing on desktop */}
                      {isLeft ? (
                        <div className="hidden md:block" />
                      ) : (
                        <div className="hidden md:block md:col-start-1 md:row-start-1" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          JOIN CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-off-white via-gold-pale/40 to-off-white">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-gold/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="reveal">
            <div className="flex items-center justify-center mb-6">
              <span className="block w-12 h-px bg-gold/40" />
              <span className="block w-2 h-2 rotate-45 border border-gold/60 mx-4" />
              <span className="block w-12 h-px bg-gold/40" />
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-black-rich leading-tight">
              Think You'd Fit In?
            </h2>

            <p className="mt-6 text-grey-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              If you're a man aged 18-45, live in or around King's Lynn, and fancy meeting some
              decent people while doing something worthwhile — drop us a line. Come along to a meeting,
              no commitment. We promise you'll leave with a smile (and probably a full stomach).
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson text-white font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-crimson-dark transition-colors duration-200 shadow-lg shadow-crimson/20"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-crimson text-black-rich text-sm uppercase tracking-wider rounded-sm hover:border-crimson/70 hover:bg-crimson/5 transition-all duration-200"
              >
                See What's On
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
