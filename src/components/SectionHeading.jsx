export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="reveal text-center mb-12 md:mb-16">
      {/* Gold decorative line */}
      <div className="flex items-center justify-center mb-5">
        <span className="block w-8 h-px bg-gold/40" />
        <span className="block w-2 h-2 rotate-45 border border-gold/60 mx-3" />
        <span className="block w-8 h-px bg-gold/40" />
      </div>

      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
