import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import ActionButton from "../components/ActionButton.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { clinic } from "../data/site.js";

export default function Contact() {
  return (
    <>
      <SectionWrapper tone="white" className="pb-10">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Contact</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-6xl">
            Clinic location and consultation support
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Reach the clinic for appointments, treatment enquiries, and visit planning.
          </p>
        </Reveal>
      </SectionWrapper>

      <section className="bg-white px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="relative min-h-[560px] overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-2xl shadow-slate-900/10">
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 border-t border-[#CBD5E1]" />
              <div className="absolute left-[22%] top-[14%] h-[72%] border-l border-[#CBD5E1]" />
              <div className="absolute right-[24%] top-[20%] h-[60%] border-l border-[#CBD5E1]" />
              <div className="absolute left-[8%] right-[8%] top-[32%] border-t border-[#E2E8F0]" />
              <div className="absolute left-[14%] right-[14%] bottom-[28%] border-t border-[#E2E8F0]" />
              <div className="absolute left-1/2 top-1/2 grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#0F172A] text-white shadow-xl">
                <MapPin size={30} />
              </div>
            </div>

            <div className="absolute bottom-8 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-2xl shadow-slate-900/12 backdrop-blur md:bottom-10 md:left-10 md:right-auto md:max-w-md">
              <h2 className="text-2xl font-bold text-[#0F172A]">Contact details</h2>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#2563EB]" size={22} />
                  <p className="leading-relaxed text-slate-600">{clinic.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-[#2563EB]" size={22} />
                  <p className="leading-relaxed text-slate-600">{clinic.phone}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionButton href={clinic.phoneHref} icon={Phone}>Call Now</ActionButton>
                <ActionButton href={clinic.whatsappHref} icon={MessageCircle} variant="secondary">WhatsApp</ActionButton>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative z-10 mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-7 shadow-xl shadow-slate-900/10 md:p-8">
            <Clock className="text-[#2563EB]" size={30} />
            <h2 className="mt-5 text-2xl font-bold text-[#0F172A]">Business hours</h2>
            <div className="mt-5 grid gap-3 leading-relaxed text-slate-600 md:grid-cols-3">
              <p>Monday - Saturday: 9:30 AM - 8:00 PM</p>
              <p>Sunday: By appointment</p>
              <p>Emergency consultation support available through call or WhatsApp.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
