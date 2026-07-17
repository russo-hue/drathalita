import { Instagram, MessageCircle } from "lucide-react";
import {
  CREFITO,
  INSTAGRAM_URL,
  PROFESSIONAL_NAME,
  PROFESSION,
  SERVICE_REGION,
  whatsappUrl,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-forest-950 py-10 text-cream">
      <div className="container-page grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-serif text-2xl font-bold">{PROFESSIONAL_NAME}</p>
          <p className="mt-2 font-semibold text-cream/78">
            {PROFESSION}. {CREFITO}.
          </p>
          <p className="mt-2 text-cream/78">Atendimento domiciliar em {SERVICE_REGION}.</p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-cream/68">
            As informações deste site possuem caráter informativo e não substituem uma
            avaliação individualizada.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a className="inline-flex items-center gap-2 font-bold text-gold-300" href={whatsappUrl}>
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            className="inline-flex items-center gap-2 font-bold text-gold-300"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            Instagram
          </a>
          <p className="mt-4 text-sm text-cream/60">
            © {new Date().getFullYear()} {PROFESSIONAL_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
