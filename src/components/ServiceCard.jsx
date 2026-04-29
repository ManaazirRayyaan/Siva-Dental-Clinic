export default function ServiceCard({
  title,
  description,
  icon: Icon,
  tagline = "Specialist planning · Modern care · Clear guidance",
  variant = "strict",
}) {
  if (variant === "minimal") {
    return (
      <article className="group flex h-full flex-col justify-between bg-white p-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#F8FAFC] hover:shadow-lg">
        <div className="space-y-4">
          {Icon && (
            <div className="grid size-10 place-items-center border border-[#E2E8F0] text-[#0F172A] transition duration-300 group-hover:border-[#2563EB] group-hover:text-[#2563EB]">
              <Icon size={20} strokeWidth={2} />
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight tracking-tight text-[#0F172A]">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        </div>
        <div className="mt-6 border-b-2 border-[#2563EB]" />
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col justify-between border border-gray-200 bg-white p-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-lg">
      <div className="space-y-3">
        <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0F172A]">{title}</h3>
        <p className="leading-relaxed text-slate-600">{description}</p>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4">
        <p className="text-sm font-medium text-[#0F172A]">{tagline}</p>
      </div>
    </article>
  );
}
