export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "O atendimento é realizado na casa do paciente?",
    answer:
      "Sim. O atendimento é domiciliar e realizado com hora marcada em Guarulhos e região.",
  },
  {
    question: "Para quem o atendimento domiciliar é indicado?",
    answer:
      "É indicado para pessoas idosas, pacientes em recuperação, pessoas com dificuldade de locomoção, pacientes neurológicos e pessoas que buscam mais conforto e praticidade.",
  },
  {
    question: "Como o tratamento é definido?",
    answer:
      "O tratamento é definido após uma avaliação individual, considerando as necessidades, limitações e objetivos de cada paciente.",
  },
  {
    question: "Quantas sessões serão necessárias?",
    answer:
      "A quantidade e a frequência das sessões dependem da avaliação, da condição apresentada e da evolução de cada paciente.",
  },
  {
    question: "Como faço para agendar?",
    answer: "O agendamento pode ser realizado diretamente pelo WhatsApp.",
  },
  {
    question: "É possível um familiar acompanhar o atendimento?",
    answer:
      "Sim. A participação da família pode ser importante, especialmente para orientar cuidados e acompanhar a evolução do paciente.",
  },
];
