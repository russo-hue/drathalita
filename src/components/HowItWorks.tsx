import { ClipboardList, MessageCircle, NotepadText, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Contato inicial",
    description: "Você entra em contato pelo WhatsApp e explica brevemente a necessidade do paciente.",
    icon: MessageCircle,
  },
  {
    title: "Avaliação fisioterapêutica",
    description:
      "É realizada uma avaliação para compreender as limitações, necessidades e objetivos do tratamento.",
    icon: ClipboardList,
  },
  {
    title: "Plano personalizado",
    description: "Com base na avaliação, é elaborado um plano terapêutico individualizado.",
    icon: NotepadText,
  },
  {
    title: "Acompanhamento da evolução",
    description:
      "O tratamento é acompanhado e ajustado conforme a evolução e as respostas do paciente.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white/70">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Processo</p>
          <h2 className="heading-lg">Como funciona o atendimento</h2>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title}>
              <article className="card relative h-full p-6">
                <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-gold-100 text-forest-800">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="absolute right-5 top-5 font-serif text-4xl font-bold text-forest-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-extrabold text-forest-900">{title}</h3>
                <p className="mt-3 leading-7 text-graphite">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
