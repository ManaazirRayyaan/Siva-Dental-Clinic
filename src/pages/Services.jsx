import Reveal from "../components/Reveal.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import { detailedServices } from "../data/site.js";

export default function Services() {
  return (
    <>
      <SectionWrapper tone="white" className="pb-10">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">Treatments</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-6xl">
            Our Specialized Treatments
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Advanced dental and maxillofacial treatments delivered with specialist planning, modern equipment, and a calm clinical experience.
          </p>
        </Reveal>
      </SectionWrapper>

      <section className="space-y-8 bg-white px-6 pb-24 md:px-12 lg:px-20">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          const reverse = index % 2 === 1;

          return (
            <Reveal key={service.title} delay={index * 90}>
              <article className={`mx-auto grid max-w-7xl items-center gap-8 ${reverse ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.92fr_1.08fr]"}`}>
                <div className={`${reverse ? "lg:order-2" : ""} relative min-h-[330px] overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10`}>
                  <div
                    className="image-treatment absolute inset-0 transition duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-white/10" />
                </div>

                <div className={`${reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"} relative`}>
                  <div className="absolute -left-6 top-2 hidden h-28 w-px bg-[#CBD5E1] lg:block" />
                  <Icon className="text-[#2563EB]" size={32} />
                  <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{service.description}</p>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="h-px w-16 bg-[#2563EB]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Diagnosis-led care
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
