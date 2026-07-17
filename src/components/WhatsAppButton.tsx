import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-forest-700 text-cream shadow-soft transition hover:-translate-y-1 hover:bg-forest-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-gold-300 sm:bottom-6 sm:right-6"
      aria-label="Abrir conversa no WhatsApp para agendar avaliação"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-forest-700 opacity-20 motion-reduce:hidden" />
      <MessageCircle className="relative" size={27} aria-hidden="true" />
    </a>
  );
}
