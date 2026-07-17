import { ClipboardCheck, HeartHandshake, TrendingUp } from "lucide-react";
import { CREFITO, PROFESSIONAL_NAME, publicAsset } from "@/lib/constants";
import { Reveal } from "./Reveal";

const differentials = [
  { label: "Escuta e atendimento humanizado", icon: HeartHandshake },
  { label: "Tratamento individualizado", icon: ClipboardCheck },
  { label: "Acompanhamento da evolução", icon: TrendingUp },
];

export function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <img
            src={publicAsset("/images/ilustracao-fisioterapia-thalita.png")}
            alt="Ilustração de atendimento fisioterapêutico humanizado"
            width={1254}
            height={1254}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-[1.35rem] bg-[#fffaf0] object-contain p-5 shadow-soft"
          />
        </Reveal>

        <Reveal>
          <p className="eyebrow mb-3">Sobre a Dra. Thalita</p>
          <h2 className="heading-lg">Cuidar da sua saúde é devolver a liberdade dos seus movimentos.</h2>
          <div className="mt-6 space-y-4 text-[1.03rem] leading-8 text-graphite">
            <p>
              Sou a {PROFESSIONAL_NAME}, fisioterapeuta, {CREFITO}, apaixonada por ajudar
              pessoas a recuperarem sua autonomia, reduzirem dores e conquistarem uma melhor
              qualidade de vida.
            </p>
            <p>
              Cada paciente possui uma história, necessidades e objetivos diferentes. Por isso,
              meu atendimento é totalmente individualizado, respeitando suas limitações e
              desenvolvendo um plano terapêutico adequado para sua recuperação.
            </p>
            <p>
              Meu compromisso é oferecer um atendimento acolhedor, profissional e baseado nas
              melhores práticas da fisioterapia.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {differentials.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-lg bg-white p-4 shadow-card">
                <Icon className="mb-3 text-gold-500" size={24} aria-hidden="true" />
                <p className="text-sm font-extrabold leading-snug text-forest-900">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
