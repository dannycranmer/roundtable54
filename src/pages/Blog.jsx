import { Link } from 'react-router-dom';
import { posts } from '../data/blog';
import useScrollReveal from '../hooks/useScrollReveal';

const categoryColors = {
  Events: 'bg-gold/15 text-gold',
  Community: 'bg-crimson/15 text-crimson',
  Charity: 'bg-crimson/15 text-crimson',
  News: 'bg-black-rich/10 text-black-rich',
  EuroMeeting: 'bg-gold/15 text-gold',
};

export default function Blog() {
  useScrollReveal();

  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black-rich noise-bg overflow-hidden">
        <div className="spoke-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">
              Stories
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-off-white tracking-tight">
            Blog
          </h1>
          <p className="mt-5 text-lg text-grey-light max-w-xl leading-relaxed">
            News, stories, and reflections from King&apos;s Lynn Round Table 54.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent" />
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* ── Featured Post ── */}
          <article className="reveal group mb-20">
            <Link
              to={`/blog/${featured.slug}`}
              className="block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black-rich/8 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - image or gradient */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-black-rich via-grey-dark to-grey overflow-hidden">
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <svg
                        className="w-16 h-16 text-off-white/15 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={0.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z"
                        />
                      </svg>
                      <span className="font-[family-name:var(--font-display)] text-off-white/20 text-2xl font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                  {/* Crimson accent strip */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-crimson-dark to-crimson" />
                </div>

                {/* Right - content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                        categoryColors[featured.category] || 'bg-grey-light/10 text-grey-light'
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-grey-light text-sm">{featured.date}</span>
                  </div>

                  <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-black-rich mb-5 group-hover:text-crimson transition-colors duration-300 leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-black-rich/70 leading-relaxed text-base lg:text-lg mb-8">
                    {featured.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-crimson font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                    Read Full Story
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* ── Remaining Posts Grid ── */}
          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((post, i) => (
              <article
                key={post.id}
                className="reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black-rich/8 transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}

                  <div className="p-7 md:p-9">
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                          categoryColors[post.category] || 'bg-grey-light/10 text-grey-light'
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-grey-light text-sm">{post.date}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-black-rich mb-4 group-hover:text-crimson transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-black-rich/70 leading-relaxed text-[0.95rem] mb-6">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-crimson font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
