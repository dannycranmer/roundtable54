import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import useScrollReveal from '../hooks/useScrollReveal';

const categories = ['All', 'Events', 'EuroMeeting', 'Charity', 'Social', 'Community', 'Club'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
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
            {filtered.map((image, i) => (
              <div
                key={image.id}
                className="reveal break-inside-avoid group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden bg-black-rich cursor-pointer"
                  onClick={() => setLightbox(image)}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                  />

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
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-grey-light py-16 text-lg">
              No photos in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-rich/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-off-white text-2xl"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <div
            className="flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-[family-name:var(--font-display)] text-off-white text-xl font-bold">
                {lightbox.title}
              </h3>
              <p className="text-grey-light text-sm mt-1">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
