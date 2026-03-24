import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import useScrollReveal from '../hooks/useScrollReveal';

const categories = ['All', 'Events', 'Charity', 'Social', 'Club'];

/* Generate a unique gradient for each image based on its index */
const gradients = [
  'from-black-rich via-grey-dark to-black-soft',
  'from-grey-dark via-grey to-black-rich',
  'from-black-soft via-black-rich to-grey-dark',
  'from-grey via-grey-dark to-black-soft',
  'from-black-rich via-black-soft to-grey',
  'from-grey-dark to-black-rich via-grey',
  'from-black-soft to-grey-dark via-black-rich',
  'from-black-rich via-grey to-grey-dark',
];

const gradientAngles = [
  'bg-gradient-to-br',
  'bg-gradient-to-tr',
  'bg-gradient-to-bl',
  'bg-gradient-to-r',
  'bg-gradient-to-tl',
  'bg-gradient-to-b',
  'bg-gradient-to-t',
  'bg-gradient-to-l',
];

/* Different heights for masonry effect */
const heights = [
  'h-64',
  'h-80',
  'h-72',
  'h-96',
  'h-64',
  'h-80',
  'h-72',
  'h-64',
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  useScrollReveal();

  const filtered =
    active === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category.toLowerCase() === active.toLowerCase()
        );

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-black-rich noise-bg overflow-hidden">
        <div className="spoke-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">
              Moments
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-off-white tracking-tight">
            Gallery
          </h1>
          <p className="mt-5 text-lg text-grey-light max-w-xl leading-relaxed">
            A look back at the events, socials, and community projects that make
            RT54 what it is.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent" />
      </section>

      {/* ── Filters ── */}
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

          {/* ── Masonry Grid ── */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((image, i) => {
              const idx = image.id - 1;
              return (
                <div
                  key={image.id}
                  className="reveal break-inside-avoid group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className={`relative ${heights[idx % heights.length]} rounded-2xl overflow-hidden ${gradientAngles[idx % gradientAngles.length]} ${gradients[idx % gradients.length]} cursor-pointer`}
                  >
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      {/* Camera icon */}
                      <svg
                        className="w-12 h-12 text-off-white/20 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                        />
                      </svg>
                      <h3 className="font-[family-name:var(--font-display)] text-off-white/30 text-lg font-bold">
                        {image.title}
                      </h3>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black-rich/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gold/20 text-gold mb-4">
                        {image.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-off-white text-xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-grey-light text-sm leading-relaxed max-w-xs">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-grey-light py-16 text-lg">
              No photos in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
