import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md active:scale-95 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5";

const variants = {
  primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus:ring-[#2563EB]",
  secondary: "border border-[#2563EB] bg-white text-[#2563EB] hover:bg-[#EFF6FF] focus:ring-[#2563EB]",
  dark: "bg-[#0F172A] text-white hover:bg-[#1E293B] focus:ring-[#0F172A]",
  light: "border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB] focus:ring-[#2563EB]",
};

export default function ActionButton({ children, href, to, variant = "primary", icon: Icon, className = "" }) {
  const content = (
    <>
      {Icon && <Icon size={18} strokeWidth={2.2} />}
      <span>{children}</span>
    </>
  );
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {content}
    </a>
  );
}
