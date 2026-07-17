import { Check, Home, MapPin } from "lucide-react";
import { SERVICE_REGION } from "@/lib/constants";
import { Reveal } from "./Reveal";

const audience = [
  "Pessoas idosas",
  "Pacientes em recuperação pós-cirúrgica",
  "Pessoas com dificuldade de locomoção",
  "Pacientes neurológicos",
  "Pessoas que buscam mais conforto e praticidade",
  "Familiares que desejam acompanhar o tratamento",
];

export function HomeCare() {
  return (
    <section id="domiciliar" className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.86fr]">
        <Reveal>
          <p className="eyebrow mb-3">Atendimento domiciliar</p>
          <h2 className="heading-lg">Atendimento fisioterapêutico no conforto da sua casa</h2>
          <div className="mt-6 space-y-4 text-[1.03rem] leading-8 text-graphite">
            <p>
              Receba um atendimento fisioterapêutico completo sem enfrentar trânsito, filas
              ou deslocamentos desnecessários.
            </p>
            <p>
              O atendimento domiciliar proporciona mais conforto, segurança e praticidade,
              permitindo que o tratamento seja realizado em um ambiente familiar e adaptado
              à realidade do paciente.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card p-6">
            <Home className="mb-5 text-gold-500" size={30} aria-hidden="true" />
            <ul className="grid gap-3">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-forest-900">
                  <Check className="mt-1 shrink-0 text-forest-700" size={18} aria-hidden="true" />
                  <span className="font-semibold leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-lg bg-forest-900 p-5 text-cream">
              <div className="flex items-center gap-3">
                <MapPin className="shrink-0 text-gold-300" size={22} aria-hidden="true" />
                <strong>Atendimento domiciliar em {SERVICE_REGION}.</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
