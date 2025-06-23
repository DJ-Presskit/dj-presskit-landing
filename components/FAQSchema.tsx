import { FAQPage, WithContext } from "schema-dts";

export default function FAQSchema() {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "FAQs — DJ Presskit",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un press kit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un press kit es un sitio web profesional que muestra tu información como DJ, incluyendo tu biografía, fotos, videos, música y redes sociales. Es tu tarjeta de presentación digital para promotores, bookers y clubes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué necesito un presskit si ya tengo Instagram o Linktree?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque DJ Presskit es un espacio real y coherente con diseño estratégico y dominio propio para transmitir profesionalismo. Unifica tu bio, música, fechas, rider y fotos en un solo link que Instagram o Linktree no pueden ofrecer, posicionándote como un DJ serio ante bookers, sellos y tu comunidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué incluye exactamente mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluye un sitio web responsive, listo en 48 horas hábiles; tu bio, redes sociales y galería de imágenes; secciones de eventos sincronizadas con Google Sheets; formulario de contacto y carpeta de Google Drive; dominio personalizado (TuNombre.dj-presskit.com), hosting y certificados HTTPS. SEO Avanzado y posicionamiento en internet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona el proceso y cuánto demora?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Envías tu información (bio, fotos, redes, links y rider) a través de un formulario sencillo. Nuestro equipo te acompaña de forma cercana por WhatsApp o email y publicamos tu presskit en 48 horas hábiles, sin complicaciones técnicas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo personalizar el diseño a mi estilo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Desde el Plan Básico con plantilla moderna hasta el Premium con diseño 100 % a medida; agregamos animaciones, secciones dinámicas o integraciones con SoundCloud según tu plan, siempre manteniendo tu identidad visual como eje principal.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo ver ejemplos antes de contratar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claro. Accedé al demo de nuestro Plan Avanzado y revisá casos reales de DJs que ya profesionalizaron su imagen: https://template-avanzado.dj-presskit.com",
        },
      },
      {
        "@type": "Question",
        name: "¿Y si después quiero actualizar o escalar mi sitio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podés actualizar tu calendario de eventos o subir nuevas fotos vía Google Drive. Ofrecemos soporte continuo, planes de referidos y formás parte de una comunidad de DJs en constante evolución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo comparto mi presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu presskit tendrá una URL única que podés compartir en tus redes sociales, enviarla a promotores y bookers, o incluir en la biografía de tu Instagram.",
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
