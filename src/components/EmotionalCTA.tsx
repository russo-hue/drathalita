import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function EmotionalCTA() {
  return (
    <section className="section-padding luxury-panel text-cream">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-3 text-gold-300">Cuidado com presença</p>
          <div className="brand-line mx-auto mb-6" />
          <h2 className="font-serif text-[clamp(1.85rem,3.8vw,3.1rem)] font-bold leading-tight text-cream">
            Seu corpo merece voltar a fazer aquilo que você ama.
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-8 text-cream/86 sm:text-lg">
            <p>
              Não permita que a dor, a limitação dos movimentos ou o desconforto prejudiquem
              sua rotina e sua qualidade de vida.
            </p>
            <p>
              Com o tratamento adequado, é possível recuperar movimentos, aliviar dores e viver
              com mais autonomia, confiança e segurança.
            </p>
          </div>
          <a className="btn mt-8 bg-gold-300 text-forest-950 hover:bg-gold-100" href={whatsappUrl}>
            <MessageCircle size={19} aria-hidden="true" />
            Quero agendar uma avaliação
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
