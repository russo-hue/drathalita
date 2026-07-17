"use client";

import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section className="section-padding bg-forest-50/75">
      <div className="container-page max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow mb-3">Perguntas frequentes</p>
          <h2 className="heading-lg">Dúvidas comuns</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <Reveal key={item.question}>
              <details className="group rounded-lg border border-forest-700/10 bg-white p-5 shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-extrabold text-forest-900">
                  {item.question}
                  <ChevronDown
                    className="shrink-0 transition group-open:rotate-180"
                    size={22}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 leading-7 text-graphite">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
