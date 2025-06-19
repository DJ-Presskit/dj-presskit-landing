// lib/gtag.ts

export const GA_MEASUREMENT_ID = "G-BBBD01RY23";

// Envia eventos a GA
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Envia eventos personalizados a GA
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID) return;
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Función específica para tracking de clicks en botones CTA de WhatsApp
export const trackWhatsAppClick = (buttonLocation: string) => {
  event({
    action: "WHATSAPP_CTA",
    category: "WHATSAPP_CTA",
    label: buttonLocation,
  });
};
