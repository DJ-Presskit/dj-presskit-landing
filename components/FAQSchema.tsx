import { FAQPage, WithContext } from "schema-dts";
import {getLocale} from 'next-intl/server';

export default async function FAQSchema() {
  const locale = await getLocale();
  const isEn = locale === 'en';
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: isEn ? "FAQs — DJ Presskit" : "FAQs — DJ Presskit",
    mainEntity: isEn ? [
      {
        "@type": "Question",
        name: "What is a press kit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A press kit is a professional website that showcases your information as a DJ, including your bio, photos, videos, music and social networks. It's your digital business card for promoters, bookers and clubs.",
        },
      },
      {
        "@type": "Question",
        name: "Why do I need a presskit if I already have Instagram or Linktree?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because DJ Presskit is a real space with strategic design and your own domain to convey professionalism. It unifies your bio, music, dates, rider and photos in a single link that Instagram or Linktree cannot offer, positioning you as a serious DJ to bookers, labels and your community.",
        },
      },
      {
        "@type": "Question",
        name: "What does my presskit include exactly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It includes a responsive website ready in 48 business hours; your bio, social networks and image gallery; events sections synchronized with Google Sheets; contact form and Google Drive folder; custom domain (YourName.dj-presskit.com), hosting and HTTPS certificates. Advanced SEO and web positioning.",
        },
      },
      {
        "@type": "Question",
        name: "How does the process work and how long does it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You send your information (bio, photos, networks, links and rider) through a simple form. Our team accompanies you closely via WhatsApp or email and we publish your presskit in 48 business hours, without technical complications.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the design to my style?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. From the Basic Plan with a modern template to the Premium with 100% custom design; we add animations, dynamic sections or SoundCloud integrations depending on your plan, always keeping your visual identity as the main axis.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see examples before hiring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Of course. Access the demo of our Advanced Plan and review real cases of DJs who have already professionalized their image: https://template-avanzado.dj-presskit.com",
        },
      },
      {
        "@type": "Question",
        name: "What if I later want to update or scale my site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can update your events calendar or upload new photos via Google Drive. We offer ongoing support, referral plans and you become part of a community of DJs in constant evolution.",
        },
      },
      {
        "@type": "Question",
        name: "How do I share my presskit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your presskit will have a unique URL that you can share on your social networks, send to promoters and bookers, or include in your Instagram bio.",
        },
      },
    ] : [
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
