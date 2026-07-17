export type Service = {
  title: string;
  description: string;
  icon: "bone" | "brain" | "heartPulse" | "activity" | "clipboard" | "sparkles";
};

export const services: Service[] = [
  {
    title: "Fisioterapia traumato-ortopédica",
    description:
      "Tratamento de dores, lesões musculares e articulares, limitações de movimento e recuperação de condições ortopédicas.",
    icon: "bone",
  },
  {
    title: "Fisioterapia neurofuncional",
    description:
      "Reabilitação voltada à mobilidade, equilíbrio, coordenação e independência de pacientes com alterações neurológicas.",
    icon: "brain",
  },
  {
    title: "Fisioterapia em gerontologia",
    description:
      "Cuidado direcionado à pessoa idosa, com foco em força, equilíbrio, prevenção de quedas, mobilidade e autonomia.",
    icon: "heartPulse",
  },
  {
    title: "Reabilitação funcional",
    description:
      "Recuperação de movimentos e capacidades necessárias para realizar atividades da rotina com mais segurança.",
    icon: "activity",
  },
  {
    title: "Recuperação pós-cirúrgica",
    description:
      "Acompanhamento fisioterapêutico para recuperar mobilidade, força e função após procedimentos cirúrgicos.",
    icon: "clipboard",
  },
  {
    title: "Tratamento da dor",
    description:
      "Estratégias terapêuticas para aliviar dores, melhorar os movimentos e reduzir limitações funcionais.",
    icon: "sparkles",
  },
];
