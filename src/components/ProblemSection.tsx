import { Activity, Bone, Footprints, Move3D, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  { label: "Dor durante os movimentos", icon: Bone },
  { label: "Dificuldade para caminhar", icon: Footprints },
  { label: "Recuperação após cirurgia", icon: ShieldCheck },
  { label: "Perda de força e equilíbrio", icon: Activity },
  { label: "Limitações neurológicas", icon: Move3D },
  { label: "Dificuldade de locomoção", icon: UserRoundCheck },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white/62">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Quando procurar atendimento</p>
          <h2 className="heading-lg">A dor ou a limitação está prejudicando sua rotina?</h2>
          <p className="body-lead mt-5">
            Dificuldades para caminhar, realizar tarefas simples, recuperar-se de uma cirurgia
            ou conviver com dores podem reduzir significativamente a autonomia e a qualidade
            de vida.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ label, icon: Icon }) => (
            <Reveal key={label}>
              <div className="card flex h-full items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-gold-300/70">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="text-base font-extrabold text-forest-900">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl rounded-xl border-l-4 border-gold-500 bg-forest-50 p-6 text-center text-lg font-semibold leading-relaxed text-forest-900">
          Com acompanhamento adequado e um plano de tratamento individualizado, é possível
          recuperar movimentos, reduzir limitações e retomar atividades importantes do dia a dia.
        </Reveal>
      </div>
    </section>
  );
}
