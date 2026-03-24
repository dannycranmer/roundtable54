import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/blog';
import useScrollReveal from '../hooks/useScrollReveal';

const categoryColors = {
  Events: 'bg-gold/15 text-gold',
  Community: 'bg-crimson/15 text-crimson',
  Charity: 'bg-crimson/15 text-crimson',
  News: 'bg-black-rich/10 text-black-rich',
};

export default function BlogPost() {
  const { slug } = useParams();
  useScrollReveal();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <section className="relative bg-black-rich noise-bg overflow-hidden">
          <div className="spoke-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-bold text-off-white mb-4">
              404
            </h1>
            <p className="text-grey-light text-lg mb-8">
              This post doesn&apos;t exist. Maybe it never did.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-3.5 bg-crimson hover:bg-crimson-dark text-white font-bold rounded-full tracking-wide uppercase text-sm transition-all duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black-rich noise-bg overflow-hidden">
        <div className="spoke-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-semibold uppercase tracking-wide transition-colors duration-300 mb-10"
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Category badge */}
          <span
            className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full mb-6 ${
              categoryColors[post.category] || 'bg-grey-light/10 text-grey-light'
            }`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-off-white tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-grey-light text-sm">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>By {post.author}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent" />
      </section>

      {/* ── Content ── */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <article className="reveal">
            {/* Gold drop cap line */}
            <div className="w-16 h-px bg-gold/40 mb-10" />

            <div className="text-black-rich/80 text-lg leading-[1.85] space-y-6">
              {post.content.split('. ').reduce((acc, sentence, i, arr) => {
                // Group sentences into paragraphs of 2-3 sentences
                const groupIndex = Math.floor(i / 3);
                if (!acc[groupIndex]) acc[groupIndex] = [];
                acc[groupIndex].push(sentence + (i < arr.length - 1 ? '.' : ''));
                return acc;
              }, []).map((group, i) => (
                <p key={i}>{group.join(' ')}</p>
              ))}
            </div>
          </article>

          {/* Gold divider */}
          <div className="flex items-center justify-center my-16 md:my-20">
            <span className="block w-12 h-px bg-gold/30" />
            <span className="block w-2 h-2 rotate-45 border border-gold/40 mx-4" />
            <span className="block w-12 h-px bg-gold/30" />
          </div>

          {/* ── Related Posts ── */}
          {related.length > 0 && (
            <div className="reveal">
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-black-rich mb-10 text-center">
                More from RT54
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {related.map((relPost) => (
                  <Link
                    key={relPost.id}
                    to={`/blog/${relPost.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black-rich/8 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                            categoryColors[relPost.category] || 'bg-grey-light/10 text-grey-light'
                          }`}
                        >
                          {relPost.category}
                        </span>
                        <span className="text-grey-light text-sm">{relPost.date}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-black-rich group-hover:text-crimson transition-colors duration-300 leading-snug mb-3">
                        {relPost.title}
                      </h3>
                      <p className="text-black-rich/70 text-sm leading-relaxed line-clamp-2">
                        {relPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
