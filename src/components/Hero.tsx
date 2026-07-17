import { CheckCircle2, HeartHandshake, Home, MessageCircle } from "lucide-react";
import { publicAsset, SERVICE_REGION, whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

const trustItems = [
  "Atendimento individualizado",
  "Fisioterapia domiciliar",
  "Plano terapêutico personalizado",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[calc(var(--header-height)+36px)]">
      <div className="container-page pb-16 pt-10 lg:pb-24">
        <Reveal className="mb-11 flex justify-center">
          <div className="flex w-full max-w-4xl items-center justify-center gap-4 text-center">
            <span className="brand-line hidden sm:block" />
            <p className="eyebrow">Atendimento domiciliar em {SERVICE_REGION}</p>
            <span className="brand-line hidden sm:block" />
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
          <h1 className="heading-xl max-w-3xl">
            Volte a viver sem dor e com mais qualidade de vida.
          </h1>
          <p className="body-lead mt-6 max-w-2xl">
            Atendimento fisioterapêutico humanizado e personalizado, realizado no conforto
            da sua casa, com foco na sua recuperação, independência e bem-estar.
          </p>
          <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-forest-800 sm:text-lg">
            Mais mobilidade, funcionalidade e qualidade de vida em todas as fases da vida.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-gold-500/30 bg-[#fffaf0]/76 px-4 py-2 text-sm font-extrabold text-forest-800 shadow-card">
            <Home size={18} aria-hidden="true" />
            Atendimento domiciliar em Guarulhos e região.
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href={whatsappUrl}>
              <MessageCircle size={19} aria-hidden="true" />
              Agendar uma avaliação pelo WhatsApp
            </a>
            <a className="btn btn-secondary" href="#domiciliar">
              <HeartHandshake size={19} aria-hidden="true" />
              Conheça o atendimento
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-gold-500/20 bg-[#fffaf0]/78 px-3 py-3 text-sm font-bold text-forest-900 shadow-card"
              >
                <CheckCircle2 className="shrink-0 text-gold-500" size={18} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          </Reveal>

          <Reveal className="lg:justify-self-end">
          <div className="image-frame">
            <img
              src={publicAsset("/images/ilustracao-fisioterapia-thalita.png")}
              alt="Ilustração minimalista de uma fisioterapeuta realizando atendimento em paciente"
              width={1254}
              height={1254}
              loading="eager"
              decoding="async"
              className="relative aspect-square w-full rounded-[1.1rem] bg-[#fffaf0] object-contain p-5 shadow-soft lg:max-w-[510px]"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-gold-500/30 bg-forest-900/95 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-gold-300 shadow-soft">
              CREFITO-3 353532
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
