export default function SectionHeading({ eyebrow, title, text, align = "left", className = "" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{text}</p>}
    </div>
  );
}
