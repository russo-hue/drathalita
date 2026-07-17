import { CalendarClock, CheckCircle2, HandHeart, Home, Route, Shield, SlidersHorizontal, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  { label: "Atendimento 100% personalizado", icon: UserCheck },
  { label: "Mais conforto e comodidade", icon: Home },
  { label: "Atendimento humanizado", icon: HandHeart },
  { label: "Flexibilidade de horários", icon: CalendarClock },
  { label: "Acompanhamento individual da evolução", icon: Route },
  { label: "Plano terapêutico adaptado ao paciente", icon: SlidersHorizontal },
  { label: "Foco em autonomia e qualidade de vida", icon: Shield },
  { label: "Atendimento domiciliar em Guarulhos e região", icon: CheckCircle2 },
];

export function Benefits() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-3">Benefícios</p>
          <h2 className="heading-lg">Por que escolher esse atendimento?</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ label, icon: Icon }) => (
            <Reveal key={label}>
              <div className="flex h-full gap-4 rounded-lg bg-white p-5 shadow-card">
                <Icon className="mt-1 shrink-0 text-gold-500" size={22} aria-hidden="true" />
                <p className="font-bold leading-7 text-forest-900">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
