import { Activity, Bone, Brain, ClipboardPlus, HeartPulse, Sparkles } from "lucide-react";
import { services, type Service } from "@/data/services";
import { Reveal } from "./Reveal";

const icons: Record<Service["icon"], typeof Activity> = {
  bone: Bone,
  brain: Brain,
  heartPulse: HeartPulse,
  activity: Activity,
  clipboard: ClipboardPlus,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section id="areas" className="section-padding border-y border-gold-500/20 bg-[#f7f0e2]/74">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-3">Tratamentos</p>
          <h2 className="heading-lg">Áreas de atuação</h2>
          <p className="body-lead mt-5">
            Tratamentos desenvolvidos de acordo com as necessidades, limitações e objetivos
            de cada paciente.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title}>
                <article className="card h-full p-6 transition hover:-translate-y-1 hover:border-gold-300/70">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-forest-800 text-gold-300">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3 className="heading-md">{service.title}</h3>
                  <p className="mt-4 leading-7 text-graphite">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
