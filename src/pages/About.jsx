import { BadgeCheck, ClipboardCheck, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";

const bullets = ["Years of experience (generic)", "Hundreds of successful treatments", "Focus on safety and hygiene"];

const approach = [
  "Clear diagnosis",
  "Transparent planning",
  "Hygienic execution",
];

export default function About() {
  return (
    <>
      <SectionWrapper tone="white" className="pb-12">
        <Reveal className="max-w-4xl space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">About the clinic</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-6xl">
            Expert Care with a Patient-First Approach
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Our clinic is built on trust, precision, and patient comfort. We combine modern dental technology with experienced hands to deliver effective and lasting results.
          </p>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper tone="alt" className="overflow-hidden">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative">
            <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-blue-100 blur-3xl" />
            <ClipboardCheck className="relative text-[#2563EB]" size={34} />
            <h2 className="relative mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
              Experienced Dental Professionals
            </h2>
            <p className="relative mt-5 max-w-lg leading-relaxed text-slate-600">
              Focus on expertise in surgery, implants, and restorative dentistry
            </p>
            <div className="relative mt-9 space-y-5">
              {bullets.map((item, index) => (
                <Reveal key={item} delay={index * 90} className="flex items-center gap-4 border-l-2 border-[#CBD5E1] pl-5 transition duration-300 hover:border-[#2563EB]">
                  <BadgeCheck className="shrink-0 text-[#2563EB]" size={21} />
                  <span className="font-semibold text-[#0F172A]">{item}</span>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative rounded-2xl bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Our approach</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
              Organized care before treatment begins
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              The clinical workflow is intentionally structured so each patient understands diagnosis, options, and safety steps before moving forward.
            </p>
            <div className="mt-8 space-y-5">
              {approach.map((item, index) => (
                <Reveal key={item} delay={index * 100} className="flex items-center gap-4">
                  <span className="grid size-9 place-items-center rounded-full bg-[#0F172A] text-xs font-bold text-white">0{index + 1}</span>
                  <h3 className="text-lg font-bold text-[#0F172A]">{item}</h3>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <Reveal className="border-l-2 border-[#E2E8F0] pl-6 transition duration-300 hover:border-[#2563EB]">
            <ShieldCheck className="text-[#2563EB]" size={30} />
            <h3 className="mt-5 text-2xl font-bold text-[#0F172A]">Safety and hygiene protocols</h3>
            <p className="mt-3 leading-relaxed text-slate-600">Procedures are supported by clean workflows, sterile handling, and careful chairside organization.</p>
          </Reveal>
          <Reveal delay={100} className="border-l-2 border-[#E2E8F0] pl-6 transition duration-300 hover:border-[#2563EB]">
            <ClipboardCheck className="text-[#2563EB]" size={30} />
            <h3 className="mt-5 text-2xl font-bold text-[#0F172A]">Planned treatment decisions</h3>
            <p className="mt-3 leading-relaxed text-slate-600">Treatment is explained through practical steps so patients know what is being done and why.</p>
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}
