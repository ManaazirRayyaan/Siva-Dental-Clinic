export default function SectionWrapper({ children, tone = "white", className = "", innerClassName = "" }) {
  const tones = {
    white: "bg-white",
    alt: "bg-[#F8FAFC]",
    dark: "bg-[#0F172A] text-white",
  };

  return (
    <section className={`${tones[tone]} px-6 py-20 md:px-12 lg:px-20 ${className}`}>
      <div className={`mx-auto max-w-7xl ${innerClassName}`}>{children}</div>
    </section>
  );
}
