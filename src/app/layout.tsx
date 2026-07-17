import type { Metadata } from "next";
import "./globals.css";
import {
  CREFITO,
  PROFESSIONAL_NAME,
  PROFESSION,
  SERVICE_REGION,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dra. Thalita Pereira | Fisioterapia Domiciliar em Guarulhos",
  description:
    "Atendimento fisioterapêutico domiciliar humanizado em Guarulhos e região. Reabilitação, mobilidade, autonomia e qualidade de vida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dra. Thalita Pereira | Fisioterapia Domiciliar em Guarulhos",
    description:
      "Atendimento fisioterapêutico domiciliar humanizado em Guarulhos e região.",
    url: SITE_URL,
    siteName: "Dra. Thalita Pereira",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/ilustracao-fisioterapia-thalita.png",
        width: 1254,
        height: 1254,
        alt: `Ilustração de atendimento fisioterapêutico da ${PROFESSIONAL_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Thalita Pereira | Fisioterapia Domiciliar em Guarulhos",
    description:
      "Atendimento fisioterapêutico domiciliar humanizado em Guarulhos e região.",
    images: ["/images/ilustracao-fisioterapia-thalita.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapist",
  name: PROFESSIONAL_NAME,
  description:
    "Atendimento fisioterapêutico domiciliar humanizado com foco em reabilitação, mobilidade, autonomia e qualidade de vida.",
  areaServed: SERVICE_REGION,
  medicalSpecialty: [
    "Fisioterapia traumato-ortopédica",
    "Fisioterapia neurofuncional",
    "Fisioterapia em gerontologia",
    "Reabilitação funcional",
    "Tratamento da dor",
  ],
  identifier: CREFITO,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
