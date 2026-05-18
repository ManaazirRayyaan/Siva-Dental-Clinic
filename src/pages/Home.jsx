import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import ActionButton from "../components/ActionButton.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { clinic, featuredServices } from "../data/site.js";

const trustStrip = ["Surgical Expertise", "Modern Clinical Setup", "Patient Safety Protocols"];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "A focused discussion to understand symptoms, treatment history, and expectations.",
  },
  {
    number: "02",
    title: "Diagnosis",
    text: "Clinical evaluation and investigation-led planning before treatment begins.",
  },
  {
    number: "03",
    title: "Treatment",
    text: "Structured execution with hygiene, safety, and long-term outcomes in mind.",
  },
];

const whyChoose = [
  {
    title: "Structured clinical planning",
    text: "Each treatment is mapped to diagnosis, risk, comfort, and expected outcome.",
  },
  {
    title: "Specialist surgical focus",
    text: "Care is suited for routine dentistry as well as complex oral and maxillofacial needs.",
  },
  {
    title: "Hygiene-first execution",
    text: "Sterile protocols and organized workflows support safer procedures.",
  },
  {
    title: "Clear patient communication",
    text: "Treatment options are explained with practical expectations and next steps.",
  },
];

export default function Home() {
  const majorServices = featuredServices.slice(0, 2);
  const compactServices = featuredServices.slice(2);
  const FirstMajorIcon = majorServices[0].icon;
  const SecondMajorIcon = majorServices[1].icon;

  return (
    <>
      <section className="hero-soft-bg overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">dental clinic 2</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-6xl">
              Precision Dental & Maxillofacial Care
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Advanced clinical treatments delivered with accuracy, safety, and patient-first care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ActionButton to="/appointment" icon={ArrowRight}>Book Consultation</ActionButton>
              <ActionButton href={clinic.phoneHref} icon={Phone} variant="light">Call Now</ActionButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -right-16 -top-12 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="relative ml-0 min-h-[420px] translate-x-0 overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl shadow-slate-900/12 lg:translate-x-10">
              <div className="clinic-photo hero-image-zoom absolute inset-3 rounded-xl" />
              <div className="absolute inset-3 rounded-xl bg-gradient-to-tr from-slate-950/30 via-transparent to-white/10" />
              <div className="absolute bottom-8 left-6 right-6 max-w-sm rounded-xl border border-slate-200 bg-white/95 p-5 shadow-xl shadow-slate-900/12 backdrop-blur md:left-8 md:right-auto">
                <p className="text-sm font-bold text-[#0F172A]">Precision-led treatment planning</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Diagnosis-first care for dental, surgical, and restorative treatment needs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {trustStrip.map((item, index) => (
            <Reveal key={item} delay={index * 100} className="group flex flex-1 items-center gap-4 border-l-2 border-[#E2E8F0] pl-5 transition duration-300 hover:border-[#2563EB]">
              <span className="text-sm font-bold text-[#2563EB]">0{index + 1}</span>
              <h2 className="text-lg font-bold tracking-tight text-[#0F172A]">{item}</h2>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionWrapper tone="alt">
        <Reveal className="grid gap-10 md:grid-cols-[0.78fr_auto_1.22fr] md:items-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
            Clinical care built on precision
          </h2>
          <div className="hidden h-44 w-px bg-[#CBD5E1] md:block" />
          <p className="text-lg leading-relaxed text-slate-600">
            dental clinic 2 focuses on delivering structured, diagnosis-driven treatment. Each procedure is planned with clarity, hygiene, and long-term outcomes in mind.
          </p>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper tone="white" className="overflow-hidden">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Services</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">Core Treatments</h2>
            <p className="leading-relaxed text-slate-600">
              Focused treatment pathways for dental rehabilitation, oral surgery, endodontics, orthodontic correction, and smile-related concerns.
            </p>
          </Reveal>

          <div className="space-y-8">
            <Reveal className="relative max-w-2xl rounded-2xl bg-[#0F172A] p-8 text-white shadow-2xl shadow-slate-900/14">
              <FirstMajorIcon className="text-blue-200" size={34} />
              <h3 className="mt-8 text-3xl font-bold tracking-tight">{majorServices[0].title}</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-slate-300">{majorServices[0].description}</p>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
            </Reveal>

            <div className="ml-0 grid gap-6 md:ml-16">
              {compactServices.slice(0, 3).map((service, index) => (
                <Reveal key={service.title} delay={index * 120} className="flex gap-5 border-l-2 border-[#E2E8F0] pl-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]">
                  <service.icon className="mt-1 shrink-0 text-[#2563EB]" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{service.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={240} className="relative ml-auto max-w-2xl rounded-2xl bg-[#F8FAFC] p-8 shadow-xl shadow-slate-900/8">
              <SecondMajorIcon className="text-[#2563EB]" size={34} />
              <h3 className="mt-8 text-3xl font-bold tracking-tight text-[#0F172A]">{majorServices[1].title}</h3>
              <p className="mt-4 max-w-lg leading-relaxed text-slate-600">{majorServices[1].description}</p>
            </Reveal>

            {compactServices.slice(3).map((service) => (
              <Reveal key={service.title} className="mr-auto flex max-w-xl gap-5 border-l-2 border-[#E2E8F0] pl-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]">
                <service.icon className="mt-1 shrink-0 text-[#2563EB]" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="alt">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Clinical process</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
              A measured path from concern to treatment
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">The clinic experience is organized around clarity first, then careful execution.</p>
          </div>
        </Reveal>
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-[#CBD5E1] md:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 200} className="relative text-center">
              <span className="relative z-10 mx-auto grid size-12 place-items-center rounded-full bg-[#0F172A] text-sm font-bold text-white shadow-lg shadow-slate-900/15">
                {step.number}
              </span>
              <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-600">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="alt" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">Clinical systems that support confident care</h2>
        </Reveal>
        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {whyChoose.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 110}
              className={`rounded-2xl bg-white/90 p-6 shadow-xl shadow-slate-900/8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-[#0F172A]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <section className="soft-cta-bg px-6 py-24 md:px-12 lg:px-20">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <div className="absolute left-1/2 top-1/2 -z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />
          <h2 className="relative text-4xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-6xl">Consult a Specialist Today</h2>
          <div className="relative mt-9 flex flex-col justify-center gap-4 sm:flex-row [&_a]:px-8 [&_a]:py-4">
            <ActionButton href={clinic.phoneHref} icon={Phone}>Call</ActionButton>
            <ActionButton href={clinic.whatsappHref} icon={MessageCircle} variant="secondary">WhatsApp</ActionButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
