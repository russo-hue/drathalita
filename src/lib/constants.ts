export const PROFESSIONAL_NAME = "Dra. Thalita Pereira da Silva";
export const SHORT_NAME = "Dra. Thalita Pereira";
export const PROFESSION = "Fisioterapeuta";
export const CREFITO = "CREFITO-3: 353532";
export const SERVICE_REGION = "Guarulhos e região";

export const WHATSAPP_NUMBER = "5511958585688";
export const WHATSAPP_MESSAGE =
  "Olá, Dra. Thalita! Conheci seu trabalho pelo site e gostaria de saber mais sobre o atendimento fisioterapêutico domiciliar.";

export const INSTAGRAM_URL = "https://instagram.com/SEUUSUARIO";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dra-thalita-pereira.com.br";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
