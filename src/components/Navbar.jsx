import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { clinic, navLinks } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-[#E2E8F0] text-[#0F172A] backdrop-blur transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/88 shadow-none"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center bg-[#0F172A] text-lg font-bold text-white transition group-hover:bg-[#2563EB]">
            S
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide">Siva Dental</span>
            <span className="block text-xs text-slate-500">& Maxillofacial Clinic</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="nav-link text-sm font-medium text-slate-500 transition hover:text-[#2563EB]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <a
          href={clinic.phoneHref}
          className="hidden items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md md:inline-flex"
        >
          <Phone size={16} />
          Call Now
        </a>

        <button
          className="grid size-11 place-items-center rounded-lg border border-[#E2E8F0] text-[#0F172A] lg:hidden"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#E2E8F0] bg-white px-6 pb-5 lg:hidden">
          <div className="flex flex-col gap-2 pt-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav-link rounded-lg px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
