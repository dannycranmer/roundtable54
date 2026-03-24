import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from '../components/SectionHeading';

const categories = ['All', 'Flagship', 'Charity', 'Social'];

const categoryColors = {
  flagship: 'bg-crimson text-white',
  charity: 'bg-gold text-black-rich',
  social: 'bg-black-soft text-white',
};

export default function Events() {
  const [active, setActive] = useState('All');
  useScrollReveal();

  const filtered =
    active === 'All'
      ? events
      : events.filter((e) => e.category.toLowerCase() === active.toLowerCase());

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black-rich noise-bg overflow-hidden">
        <div className="spoke-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">
              What&apos;s On
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-off-white tracking-tight">
            Events
          </h1>
          <p className="mt-5 text-lg text-grey-light max-w-xl leading-relaxed">
            From flagship festivals to Tuesday night socials — there&apos;s always
            something happening at RT54.
          </p>
        </div>

        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent" />
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal flex flex-wrap gap-3 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  active === cat
                    ? 'bg-crimson text-white shadow-lg shadow-crimson/20'
                    : 'bg-white-pure text-grey-dark border border-grey-light/20 hover:bg-grey-light/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Event Cards Grid ── */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event, i) => (
              <article
                key={event.id}
                className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black-rich/8 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Card top accent */}
                <div className="h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

                {event.image && (
                  <div className="h-44 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}

                <div className="p-7 md:p-8">
                  {/* Category badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-5 ${
                      categoryColors[event.category] || 'bg-grey-light/20 text-black-rich'
                    }`}
                  >
                    {event.category}
                  </span>

                  {/* Date */}
                  <p className="text-gold font-semibold text-sm mb-2 tracking-wide">
                    {event.date}
                  </p>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mb-3 group-hover:text-crimson transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-grey-light text-sm mb-4">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-black-rich/70 leading-relaxed text-[0.95rem]">
                    {event.description}
                  </p>

                  {event.sponsors && (
                    <div className="mt-4 pt-3 border-t border-grey-light/10">
                      <p className="text-[10px] uppercase tracking-wider text-grey-light/60 mb-1">Sponsored by</p>
                      <p className="text-xs text-grey-light">{event.sponsors.join(' · ')}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-grey-light py-16 text-lg">
              No events in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-off-white pb-20 md:pb-28">
        <div className="reveal mx-auto max-w-3xl px-5 lg:px-8">
          <div className="relative bg-black-rich rounded-3xl overflow-hidden noise-bg">
            <div className="spoke-pattern absolute inset-0" />
            <div className="relative z-10 text-center py-16 px-8 md:py-20 md:px-12">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-off-white mb-4">
                Want to Get Involved?
              </h2>
              <p className="text-grey-light text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                Whether you want to volunteer at an event or just come along and see
                what we&apos;re about — we&apos;d love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 bg-crimson hover:bg-crimson-dark text-white font-bold rounded-full tracking-wide uppercase text-sm transition-all duration-300 shadow-lg shadow-crimson/20 hover:shadow-crimson/30"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
