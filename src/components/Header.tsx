"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SHORT_NAME, whatsappUrl } from "@/lib/constants";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#domiciliar", label: "Atendimento domiciliar" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-500/20 bg-[#f7f0e2]/92 backdrop-blur-xl">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Ir para o início">
          <span className="brand-mark size-10 rounded-full text-sm">TP</span>
          <span>
            <span className="block font-serif text-xl font-bold leading-tight text-forest-900">
              {SHORT_NAME}
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              Fisioterapia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-forest-900/72 transition hover:text-gold-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary hidden min-h-11 px-5 text-sm lg:inline-flex" href={whatsappUrl}>
          Agendar avaliação
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gold-500/35 text-forest-900 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="container-page grid gap-2 pb-5" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-bold text-forest-900 hover:bg-forest-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary mt-2" href={whatsappUrl} onClick={() => setIsOpen(false)}>
            Agendar avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
