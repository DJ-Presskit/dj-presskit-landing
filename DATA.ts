import { CardItemType, PlanType } from "./@types";

export const whatsappLink = `https://wa.me/542477313700?text=${encodeURIComponent(
  "¡Hola! Quiero mi Presskit en 48 hs: Mi espacio profesional que muestre quién soy y unifique mi música, fechas e historia. ¿Cómo arrancamos?"
)}`;

export const benefitsCards: CardItemType[] = [
  {
    icon: "Rocket",
    title: "Entrega express en 48 hs",
    description: "Tu presskit listo para compartir cuando tu ritmo no espera.",
  },
  {
    icon: "Link",
    title: "Unifica tu talento",
    description:
      "Agrupa tu música, bio y próximas fechas en un solo espacio profesional.",
  },
  {
    icon: "Headphones",
    title: "Imagen profesional",
    description:
      "Diseño premium que refleja la calidad de tu música ante bookers y fans.",
  },
  {
    icon: "Brain",
    title: "Sin complicaciones",
    description:
      "Envíanos tu info y despreocúpate: nosotros nos encargamos de todo el proceso.",
  },
];

export const iconMap = {
  Rocket: "Rocket",
  UserPen: "UserPen",
  Link: "Link",
  Headphones: "Headphones",
  Flame: "Flame",
  Brain: "Brain",
  CheckCheck: "CheckCheck",
  Pin: "Pin",
  Clock: "Clock",
  PencilRuler: "PencilRuler",
  Lightbulb: "Lightbulb",
  Eye: "Eye",
} as const;

export const plans: PlanType[] = [
  {
    title: "Plan Presskit Básico",
    description:
      "Ideal para DJs que quieren una presencia profesional rápida, clara y sin complicaciones.",
    price: "USD $150",
    icon: "LayoutTemplate",
    includes: [
      "Diseño estático y moderno.",
      "Formulario de contacto integrado conectado a Google Sheets.",
      "Sitio responsive (adaptado a móviles).",
      "Hosting incluido.",
      "Dominio de dj-presskit incluido.",
      "Entrega en menos de 48hs.",
    ],
    href: "https://template.dj-presskit.com",
    buttonText: "EXPLORAR",
  },
  {
    title: "Plan Presskit Avanzado",
    description:
      "Un presskit más visual, más dinámico y con funciones extra para destacar.",
    price: "USD $220",
    icon: "Sparkles",
    includes: [
      "Todo lo del Plan Básico.",
      "Diseño con animaciones y transiciones parallax.",
      "Sección de próximos eventos conectada a Google Sheets.",
      "Dominio personalizado incluido con membresia.",
      "Email profesional con tu dominio.",
      "Entrega en menos de 72hs.",
    ],
    href: "https://template-avanzado.dj-presskit.com",
    buttonText: "VER DEMO",
  },
  {
    title: "Plan Presskit Premium",
    description:
      "Para DJs exigentes que buscan un impulso a medida, sin límites de creatividad ni funcionalidad.",
    price: "Desde USD $680",
    icon: "SquarePen",
    includes: [
      "Todo lo del Plan Avanzado.",
      "Diseño único desde cero.",
      "Animaciones, efectos y performance top tier.",
      "Secciones personalizadas a elección.",
      "Asesoramiento 1 a 1 en todo el proceso.",
      "Entrega en 20 días aprox.",
    ],
    href: whatsappLink,
    buttonText: "HABLEMOS",
  },
];

export const faqData = [
  {
    question: "¿Por qué necesito un presskit si ya tengo Instagram o Linktree?",
    answer: [
      "Porque DJ Presskit es tu espacio real, con diseño estratégico y dominio que transmite profesionalismo.",
      "Unifica tu bio, música, fechas, rider y fotos en un espacio coherente que Instagram o Linktree no pueden ofrecer.",
      "Te posiciona como un DJ serio ante bookers, sellos y tu comunidad, más allá de un simple perfil o lista de enlaces.",
    ],
    icon: "Lightbulb",
  },
  {
    question: "¿Qué incluye exactamente mi presskit?",
    answer: [
      "Sitio web responsive, listo en 48 hs hábiles.",
      "Tu bio, redes sociales y galería de imágenes.",
      "Sección de eventos sincronizada con Google Sheets.",
      "Sección de musica sincronizada a Soundcloud.",
      "Formulario de contacto y carpeta de Google Drive para subir todo lo que necesites.",
      "Dominio personalizado ([TuNombre].dj-presskit.com), hosting y certificados HTTPS.",
    ],
    icon: "CheckCheck",
  },
  {
    question: "¿Cómo funciona el proceso y cuánto demora?",
    answer: [
      "Envías tu información (bio, fotos, redes, links, rider) a través de un formulario sencillo.",
      "Nuestro equipo te acompaña de forma cercana por WhatsApp o mail.",
      "Recibís tu presskit terminado y publicado en 48 hs hábiles, sin complicaciones técnicas.",
    ],
    icon: "Clock",
  },
  {
    question: "¿Puedo personalizar el diseño a mi estilo?",
    answer: [
      "Sí, desde el Plan Básico moderno hasta el Premium con diseño 100% a medida.",
      "Agregamos animaciones, secciones dinámicas o integraciones con SoundCloud según el plan elegido.",
      "Siempre mantenemos tu identidad visual y tu narrativa artística como eje principal.",
    ],
    icon: "UserPen",
  },
  {
    question: "¿Puedo ver ejemplos antes de contratar?",
    answer:
      "Claro, accedé al demo de nuestra ultima capsula de Plan Avanzado y revisá casos reales de DJs que ya profesionalizaron su imagen en nuestras redes.",
    icon: "Eye",
    link: "https://template-avanzado.dj-presskit.com",
    linkText: "EXPLORAR DEMO",
  },
  {
    question: "¿Y si después quiero actualizar o escalar mi sitio?",
    answer: [
      "Podés modificar tu calendario de eventos o gestionar la subida de nuevas fotos para la galeria.",
      "La mayoria del contenido de tu Presskit se actualiza automaticamente, ya que esta integrado a tus herramientas como Artista",
      "Ofrecemos soporte continuo y planes de referidos para DJs que recomienden nuestros servicios.",
      "Formás parte de una comunidad de artistas en constante evolución.",
    ],
    icon: "PencilRuler",
  },
];
