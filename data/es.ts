import { CardItemType, PlanType, Capsule } from "@/@types";

export const whatsappLink = `https://wa.me/542477313700?text=${encodeURIComponent(
  "Envia para empezar tu Presskit"
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
    id: "advanced",
    title: "Plan Presskit Avanzado",
    description:
      "Un presskit más visual, más dinámico y con funciones extra para destacar.",
    price: 220,
    includes: [
      "Diseño con animaciones y transiciones parallax.",
      "Sección de próximos eventos conectada a Google Sheets.",
      "Dominio personalizado incluido con membresia.",
      "Email profesional con tu dominio.",
      "Entrega en menos de 48hs.",
    ],
    href: "https://template-avanzado.dj-presskit.com",
    buttonText: "VER DEMO",
  },
  {
    id: "premium",
    title: "Plan Presskit Premium",
    description:
      "Para DJs exigentes que buscan un impulso a medida, sin límites de creatividad ni funcionalidad.",
    price: 680,
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
      "SEO Avanzado y posicionamiento.",
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
      "Claro, accedé al demo de nuestra ultima CAPSULE de Plan Avanzado y revisá casos reales de DJs que ya profesionalizaron su imagen en nuestras redes.",
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

export const CAPSULES: Capsule[] = [
  {
    title: "Cápsula Génesis",
    description:
      "El primer concepto.\nUn punto de partida.\nGenesis no es solo un conjunto de sitios webs, es el inicio de una forma nueva de mostrarse con claridad y profesionalismo. De los links sueltos al branding con propósito.\nAcá nació la idea de DJ Presskit como comunidad y estándar.",
    projects: [
      {
        name: "Giuliano",
        web: "https://giuliano.dj-presskit.com",
        image: "/images/genesis-capsule/giuliano.webp",
        color: "#c8b6ff",
      },
      {
        name: "Servando",
        web: "https://servando.dj-presskit.com",
        image: "/images/genesis-capsule/servando.webp",
        color: "#0561a3",
      },
      {
        name: "Rolling",
        web: "https://rolling.dj-presskit.com",
        image: "/images/genesis-capsule/rolling.webp",
        color: "#4a1dce",
      },
      {
        name: "DEXTHER",
        web: "https://dexther.dj-presskit.com",
        image: "/images/genesis-capsule/dexther.webp",
        color: "#9642f5",
      },
      {
        name: "LUCIANO",
        web: "https://lucianobedini.dj-presskit.com",
        image: "/images/genesis-capsule/luciano.webp",
        color: "#42a4f5",
      },
      {
        name: "SERENA",
        web: "https://serena.dj-presskit.com",
        image: "/images/genesis-capsule/serena.webp",
        color: "#707070",
      },
      {
        name: "JOACO",
        web: "https://joacoibanez.dj-presskit.com",
        image: "/images/genesis-capsule/joaco.webp",
        color: "#314097",
      },
      {
        name: "Pupi Jaet",
        web: "https://pupijaet.dj-presskit.com",
        image: "/images/genesis-capsule/pupi-jaet.webp",
        color: "#e5e5e5",
      },
      { commingSoon: true, name: "Matias", web: "", image: "", color: "" },
      {
        name: "Kebin Van Reeken",
        web: "https://kebinvanreeken.dj-presskit.com",
        image: "/images/genesis-capsule/kebin-van-reeken.webp",
        color: "#501269",
      },
    ],
  },
];
