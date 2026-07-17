import { MessageCircle } from "lucide-react";
import { SERVICE_REGION, whatsappUrl } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="section-padding">
      <div className="container-page">
        <Reveal className="card mx-auto max-w-3xl border-gold-500/20 p-8 text-center sm:p-10">
          <p className="eyebrow mb-3">Agende sua avaliação</p>
          <div className="brand-line mx-auto mb-5" />
          <h2 className="heading-lg">Agende sua avaliação</h2>
          <p className="body-lead mt-5">
            Dê o primeiro passo para recuperar movimentos, reduzir limitações e conquistar
            mais qualidade de vida.
          </p>
          <p className="mt-4 text-base leading-8 text-graphite sm:text-lg">
            Entre em contato pelo WhatsApp para conversar sobre sua necessidade e receber
            mais informações.
          </p>
          <strong className="mt-6 block text-forest-800">
            Atendimento domiciliar em {SERVICE_REGION}.
          </strong>
          <a className="btn btn-primary mt-8" href={whatsappUrl}>
            <MessageCircle size={19} aria-hidden="true" />
            Falar com a Dra. Thalita pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
