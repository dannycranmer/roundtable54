import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from '../components/SectionHeading';

export default function About() {
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
            Our Story
          </p>

          <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-[1.05] tracking-tight">
            About Us
          </h1>

          {/* Gold decorative line */}
          <div className="animate-fade-up flex items-center justify-center mt-8" style={{ animationDelay: '0.15s' }}>
            <span className="block w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="animate-fade-up mt-6 text-off-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.25s' }}>
            Nearly a century of fellowship, service, and community. Here's who we are and why we do it.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR STORY
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-off-white py-24 md:py-32 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left — large display heading */}
            <div className="lg:col-span-2">
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Heritage</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-black-rich leading-tight">
                Our<br />Story
              </h2>
              {/* Decorative vertical line */}
              <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mt-8" />
              <div className="hidden lg:block mt-6 rounded-sm overflow-hidden">
                <img src="/roundtable54/images/community-event.jpg" alt="Round Table 54 community event" className="w-full" loading="lazy" />
              </div>
            </div>

            {/* Right — narrative */}
            <div className="lg:col-span-3 space-y-6 text-grey-light leading-relaxed">
              <p className="text-black-rich text-lg sm:text-xl font-medium leading-snug">
                In 1927, a young man named Louis Marchesi sat down in a Norwich pub with an idea:
                what if young businessmen could meet, share ideas, and serve their community together?
              </p>
              <p>
                That simple notion became Round Table — a movement that now spans over 65 countries
                with more than 30,000 members. The motto? <em className="text-gold font-medium not-italic">"Adopt. Adapt. Improve."</em> It's
                not just words on a badge; it's how we approach everything.
              </p>
              <p>
                King's Lynn Round Table 54 carries that legacy right here in Norfolk. We're
                a group of men aged 18-45 from all walks of life — teachers, tradesmen,
                business owners, new dads, old hands — united by a belief that you can do
                well by doing good.
              </p>
              <p>
                We run some of the town's biggest events, raise thousands for local causes,
                and build friendships that last a lifetime. We're not about pomp and ceremony.
                We're about getting stuck in, having a laugh, and leaving things better than we found them.
              </p>
              <p>
                King's Lynn has been part of the Round Table family since the 1930s. Our members arrange
                local events that bring communities together — most notably our Gin Festival and Food Festival.
                We support local causes with advice, manpower, and resources, and every penny we raise goes
                directly to where it's needed. Along the way, our members develop real skills — confidence,
                event management, leadership — and build networks that stretch from Norfolk to 65 countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT IS ROUND TABLE
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-black-rich noise-bg py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black-rich via-black-soft/30 to-black-rich pointer-events-none z-[2]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="reveal text-center mb-16">
            <div className="flex items-center justify-center mb-5">
              <span className="block w-8 h-px bg-gold/40" />
              <span className="block w-2 h-2 rotate-45 border border-gold/60 mx-3" />
              <span className="block w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-off-white tracking-tight">
              What is Round Table?
            </h2>
            <p className="mt-4 text-off-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A global network of young men making a difference — no religion, no politics, no pretence.
            </p>
          </div>

          {/* Core values grid */}
          <div className="reveal grid sm:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" stroke="#c41e2a" strokeWidth="1.5" />
                    <path d="M14 20l4 4 8-8" stroke="#c41e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Fellowship',
                text: 'Genuine friendships across backgrounds. Round Table is where you meet people you\u2019d never otherwise cross paths with \u2014 and end up calling them brothers.',
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" stroke="#c41e2a" strokeWidth="1.5" />
                    <path d="M20 12v8l5 5" stroke="#c41e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Service',
                text: 'Every penny raised goes to local causes. We give our time, our energy, and our questionable DIY skills to make our community better.',
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" stroke="#c41e2a" strokeWidth="1.5" />
                    <path d="M14 26l3-6 4 4 5-10" stroke="#c41e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Excellence',
                text: 'Adopt. Adapt. Improve. We don\'t just do things — we do them properly. Then we find a way to do them even better next time.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="text-center px-4 py-6">
                <div className="flex justify-center mb-5">{icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gold mb-3">{title}</h3>
                <p className="text-off-white/50 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Stat callout */}
          <div className="reveal mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
            {[
              { value: '30,000+', label: 'Members' },
              { value: '65+', label: 'Countries' },
              { value: '1927', label: 'Founded' },
            ].map(({ value, label }) => (
              <div key={label}>
                <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gold">{value}</span>
                <span className="block mt-1 text-xs text-off-white/40 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT WE DO — Detailed
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-off-white py-24 md:py-32 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="A snapshot of life at Round Table 54. No two weeks are the same."
          />

          {/* Asymmetric bento-style grid */}
          <div className="reveal grid md:grid-cols-2 gap-6 lg:gap-8 mt-4">
            {/* Events — large card */}
            <div className="relative bg-black-rich rounded-sm p-8 lg:p-10 overflow-hidden row-span-1 md:row-span-2 flex flex-col justify-between min-h-[320px]">
              <div className="absolute inset-0 noise-bg pointer-events-none" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">Flagship Events</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-off-white mt-3 mb-4">
                  The Events That Put Us on the Map
                </h3>
                <p className="text-off-white/50 leading-relaxed">
                  Our Gin Festival and King's Lynn Food Festival are two of the biggest community events in Norfolk.
                  Thousands attend, dozens of local vendors take part, and every penny of profit goes straight to charity.
                  These aren't your average fetes — think live music, craft beverages, street food from across the region,
                  and an atmosphere you have to experience to believe.
                </p>
              </div>

              <Link
                to="/events"
                className="relative z-10 mt-6 inline-flex items-center gap-2 text-crimson text-sm font-semibold uppercase tracking-wider hover:text-crimson-dark transition-colors w-fit"
              >
                See Events
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Charity */}
            <div className="bg-white rounded-sm p-8 lg:p-10 border-l-2 border-crimson shadow-sm">
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">Charity</span>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mt-3 mb-3">
                100% Goes to the Cause
              </h3>
              <p className="text-grey-light leading-relaxed">
                No admin fees. No overheads. When we raise money, every single penny goes directly to local
                charities and community projects. We've funded sensory gardens, supported families in crisis,
                kitted out youth groups, and so much more. It's not about big cheque photos — it's about real impact.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-sm p-8 lg:p-10 border-l-2 border-grey-dark shadow-sm">
              <span className="text-grey-dark text-xs uppercase tracking-[0.25em] font-semibold">Community</span>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mt-3 mb-3">
                Hands-On Projects
              </h3>
              <p className="text-grey-light leading-relaxed">
                It's not all about writing cheques. We get our hands dirty — building sensory gardens,
                running stalls at Norton Hill, organising charity quiz nights, and showing up wherever
                our community needs us. The satisfaction of building something real? Can't beat it.
              </p>
            </div>
          </div>

          {/* Social row */}
          <div className="reveal mt-6 lg:mt-8">
            <div className="bg-gradient-to-r from-gold-pale/60 via-off-white to-gold-pale/60 rounded-sm p-8 lg:p-10 border border-gold/10">
              <div className="max-w-3xl">
                <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">Social</span>
                <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mt-3 mb-3">
                  The Fun Stuff
                </h3>
                <p className="text-grey-light leading-relaxed">
                  Not everything has to be serious. Our social calendar is packed: curry nights, sports days,
                  BBQs with families, international weekends with Round Tablers from across Europe, hiking trips,
                  quiz nights, go-karting, and whatever mad idea someone comes up with at 11pm on a Tuesday.
                  The friendships you make here are for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SISTER GROUPS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionHeading
            title="The Round Table Family"
            subtitle="We're part of something bigger. A network of organisations that share our values."
          />

          <div className="reveal grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mt-4">
            {/* Ladies Circle */}
            <div className="relative bg-off-white rounded-sm p-8 lg:p-10 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
                    <circle cx="16" cy="12" r="6" stroke="#e8c840" strokeWidth="1.5" />
                    <path d="M8 28c0-5.5 3.5-9 8-9s8 3.5 8 9" stroke="#e8c840" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mb-3">
                  King's Lynn Ladies Circle
                </h3>
                <p className="text-grey-light leading-relaxed">
                  Our sister group. Ladies Circle is the female counterpart of Round Table, and together
                  we collaborate on events, support each other's fundraising, and double the fun at social
                  gatherings. They're a brilliant group doing amazing work in King's Lynn.
                </p>
              </div>
            </div>

            {/* 41 Club */}
            <div className="relative bg-off-white rounded-sm p-8 lg:p-10 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-grey-dark/5 rounded-full blur-2xl pointer-events-none group-hover:bg-grey-dark/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-grey-dark/10 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
                    <rect x="5" y="8" width="22" height="16" rx="3" stroke="#e8c840" strokeWidth="1.5" />
                    <path d="M12 16h8M16 12v8" stroke="#e8c840" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mb-3">
                  41 Club
                </h3>
                <p className="text-grey-light leading-relaxed">
                  When Round Tablers reach 45, they don't just disappear — they graduate to 41 Club.
                  Former members continue the fellowship and service that defined their Tabling years.
                  Once a Tabler, always a Tabler. The friendships and the mission carry on.
                </p>
              </div>
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
