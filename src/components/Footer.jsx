import { Link } from "react-router-dom";
import { clinic, navLinks } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-12 lg:px-20">
        <div>
          <h2 className="text-2xl font-bold">{clinic.name}</h2>
          <div className="mt-5 h-px w-36 bg-[#CBD5E1]" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
            Specialist dental and maxillofacial care focused on precision, comfort, hygiene, and long-term results.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F172A]">Quick links</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-slate-600 transition hover:text-[#2563EB]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F172A]">Contact info</h3>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">{clinic.address}</p>
          <a className="mt-3 block text-sm font-semibold text-[#0F172A] transition hover:text-[#2563EB]" href={clinic.phoneHref}>
            {clinic.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-[#E2E8F0] px-6 py-5 text-center text-xs text-slate-500">
        © 2026 {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
