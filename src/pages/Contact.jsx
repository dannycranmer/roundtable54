import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const hearAboutOptions = [
  { value: '', label: 'Select an option' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'friend', label: 'A Friend' },
  { value: 'event', label: 'At an Event' },
  { value: 'website', label: 'Website / Search' },
  { value: 'other', label: 'Other' },
];

const inputClass =
  'w-full bg-white border border-slate/20 rounded-xl px-5 py-3.5 text-charcoal placeholder:text-slate/50 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:shadow-lg focus:shadow-gold/5';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    hearAbout: '',
  });

  useScrollReveal();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy noise-bg overflow-hidden">
        <div className="geo-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-semibold">
              Say Hello
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-cream tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-5 text-lg text-slate max-w-xl leading-relaxed">
            Interested in joining, volunteering, or just want to know more?
            We&apos;d love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Main Content ── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Left: Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="reveal bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    {/* Success checkmark */}
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-navy mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/70 text-lg max-w-md mx-auto leading-relaxed">
                      Thanks for getting in touch, {form.name.split(' ')[0] || 'mate'}.
                      We&apos;ll get back to you as soon as we can.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-navy mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-slate mb-10">
                      Fill in the form below and we&apos;ll be in touch.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wide"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wide"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </div>

                      {/* How did you hear about us */}
                      <div>
                        <label
                          htmlFor="hearAbout"
                          className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wide"
                        >
                          How did you hear about us?
                        </label>
                        <div className="relative">
                          <select
                            id="hearAbout"
                            name="hearAbout"
                            value={form.hearAbout}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10 ${
                              !form.hearAbout ? 'text-slate/50' : 'text-charcoal'
                            }`}
                          >
                            {hearAboutOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <svg
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate/40 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-navy mb-2 uppercase tracking-wide"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us what's on your mind..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-10 py-4 bg-gold text-navy font-bold rounded-full tracking-wide uppercase text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* ── Right: Info Panel ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Join Round Table */}
              <div className="reveal bg-navy rounded-3xl overflow-hidden noise-bg relative">
                <div className="geo-pattern absolute inset-0" />
                <div className="relative z-10 p-8 md:p-10">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream mb-4">
                    Join Round Table
                  </h3>

                  <p className="text-slate leading-relaxed mb-3">
                    Open to men aged <span className="text-gold font-semibold">18&ndash;45</span>. No commitment
                    needed — just come along to a meeting and see what you think.
                  </p>
                  <p className="text-slate leading-relaxed">
                    Good company, great events, and the chance to make a real
                    difference in your community.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="reveal bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-navy mb-6">
                  Find Us Online
                </h3>

                <div className="space-y-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/KingsLynnRT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-royal group-hover:text-gold transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Facebook</p>
                      <p className="text-slate text-xs">@KingsLynnRT</p>
                    </div>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-royal group-hover:text-gold transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">X (Twitter)</p>
                      <p className="text-slate text-xs">Follow us</p>
                    </div>
                  </a>

                  {/* Round Table National */}
                  <a
                    href="https://www.roundtable.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                      <svg className="w-5 h-5 text-royal group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Round Table GB&I</p>
                      <p className="text-slate text-xs">roundtable.co.uk</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Motto */}
              <div className="reveal text-center py-6">
                <p className="font-[family-name:var(--font-display)] text-xl text-navy/30 italic tracking-wide">
                  Adopt. Adapt. Improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
