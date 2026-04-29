export default function InfoCard({ title, text, icon: Icon, className = "" }) {
  return (
    <article className={`border border-[#E2E8F0] bg-white p-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {Icon && <Icon className="mb-5 text-[#0F172A] transition duration-300" size={26} strokeWidth={2} />}
      <h3 className="text-lg font-bold leading-tight tracking-tight text-[#0F172A]">{title}</h3>
      {text && <p className="mt-3 leading-relaxed text-slate-600">{text}</p>}
    </article>
  );
}
