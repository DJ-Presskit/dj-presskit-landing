import { FAQPage, WithContext } from "schema-dts";

export default function FAQSchema() {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un DJ Presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un DJ Presskit es un sitio web profesional que muestra tu información como DJ, incluyendo tu biografía, fotos, videos, música y redes sociales. Es tu tarjeta de presentación digital para promotores y clubes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo toma crear mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu presskit estará listo en minutos. Solo necesitas proporcionar tu información y contenido, y nuestro sistema generará automáticamente un sitio web profesional y personalizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo personalizar el diseño de mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos diferentes plantillas y opciones de personalización para que tu presskit refleje tu estilo único como DJ.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo compartir mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu presskit tendrá una URL única que puedes compartir fácilmente en tus redes sociales, con promotores, clubes o incluir en tu biografía de Instagram.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué información incluye mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu presskit incluye tu biografía, galería de fotos, videos, música, próximos eventos, redes sociales y toda la información relevante que necesitan los promotores para conocerte.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
