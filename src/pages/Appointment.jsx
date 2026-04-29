import { CalendarDays, Send } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { detailedServices } from "../data/site.js";

const fieldClass = "rounded-lg border border-[#E2E8F0] bg-white/95 px-4 py-3 text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100";

export default function Appointment() {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative z-10 rounded-2xl bg-[#0F172A] px-7 py-12 text-white shadow-2xl shadow-slate-900/18 md:px-10 lg:py-20">
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
          <CalendarDays className="relative text-blue-200" size={38} />
          <h1 className="relative mt-8 max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Book Your Consultation
          </h1>
          <p className="relative mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Share your treatment requirement and preferred date. Our clinic team will confirm your appointment shortly.
          </p>
          <div className="relative mt-10 max-w-md border-l-2 border-blue-300 pl-5">
            <p className="font-bold text-white">Appointment note</p>
            <p className="mt-2 leading-relaxed text-slate-300">We will contact you shortly to confirm your appointment.</p>
          </div>
        </Reveal>

        <Reveal
          as="form"
          delay={120}
          className="relative z-20 grid gap-6 rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/12 md:p-9"
        >
          <label className="grid gap-2 text-sm font-bold text-[#0F172A]">
            Name
            <input className={fieldClass} type="text" name="name" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0F172A]">
            Phone Number
            <input className={fieldClass} type="tel" name="phone" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0F172A]">
            Treatment Required
            <select className={fieldClass} name="treatment" defaultValue="">
              <option value="" disabled>Select treatment</option>
              {detailedServices.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0F172A]">
            Preferred Date
            <input className={fieldClass} type="date" name="date" />
          </label>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1D4ED8] hover:shadow-md active:scale-95" type="button">
            <Send size={18} />
            Request Appointment
          </button>
        </Reveal>
      </div>
    </section>
  );
}
