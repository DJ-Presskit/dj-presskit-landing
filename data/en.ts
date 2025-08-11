import { CardItemType, PlanType, Capsule } from "@/@types";

export const whatsappLink = `https://wa.me/542477313700?text=${encodeURIComponent(
  "Hi! I want my Presskit in 48 hours: My professional space that shows who I am and unifies my music, dates and story. How do we start?"
)}`;

export const benefitsCards: CardItemType[] = [
  {
    icon: "Rocket",
    title: "Express delivery in 48 hours",
    description: "Your presskit ready to share when your rhythm can't wait.",
  },
  {
    icon: "Link",
    title: "Unify your talent",
    description:
      "Group your music, bio and upcoming dates in a single professional space.",
  },
  {
    icon: "Headphones",
    title: "Professional image",
    description:
      "Premium design that reflects the quality of your music to bookers and fans.",
  },
  {
    icon: "Brain",
    title: "No hassle",
    description:
      "Send us your info and relax: we take care of the entire process.",
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
    id: 'advanced',
    title: "Advanced Presskit Plan",
    description:
      "A more visual, dynamic presskit with extra features to stand out.",
    price: 220,
    includes: [
      "Design with animations and parallax transitions.",
      "Upcoming events section connected to Google Sheets.",
      "Custom domain included with membership.",
      "Professional email with your domain.",
      "Delivery in less than 48 hours.",
    ],
    href: "https://template-avanzado.dj-presskit.com",
    buttonText: "VIEW DEMO",
  },
  {
    id: 'premium',
    title: "Premium Presskit Plan",
    description:
      "For demanding DJs seeking a custom boost, with no limits to creativity or functionality.",
    price: 680,
    includes: [
      "Everything from the Advanced Plan.",
      "Unique design from scratch.",
      "Top-tier animations, effects and performance.",
      "Custom sections of your choice.",
      "1-on-1 guidance throughout the process.",
      "Delivery in ~20 days.",
    ],
    href: "https://wa.me/542477313700",
    buttonText: "LET'S TALK",
  },
];

export const faqData = [
  {
    question: "Why do I need a presskit if I already have Instagram or Linktree?",
    answer: [
      "DJ Presskit is your real space, with strategic design and domain that conveys professionalism.",
      "It unifies your bio, music, dates, rider and photos in a coherent space that Instagram or Linktree cannot offer.",
      "It positions you as a serious DJ before bookers, labels and your community, beyond a simple profile or list of links.",
    ],
    icon: "Lightbulb",
  },
  {
    question: "What exactly does my presskit include?",
    answer: [
      "Responsive website, ready in 48 business hours.",
      "Your bio, social networks and image gallery.",
      "Events section synchronized with Google Sheets.",
      "Music section synchronized with SoundCloud.",
      "Contact form and Google Drive folder to upload everything you need.",
      "Custom domain ([YourName].dj-presskit.com), hosting and HTTPS certificates.",
      "Advanced SEO and positioning.",
    ],
    icon: "CheckCheck",
  },
  {
    question: "How does the process work and how long does it take?",
    answer: [
      "Send your information (bio, photos, networks, links, rider) through a simple form.",
      "Our team accompanies you closely via WhatsApp or email.",
      "You receive your finished and published presskit in 48 business hours, with no technical complications.",
    ],
    icon: "Clock",
  },
  {
    question: "Can I customize the design to my style?",
    answer: [
      "Yes, from the modern Basic Plan to the Premium with 100% custom design.",
      "We add animations, dynamic sections or SoundCloud integrations depending on the chosen plan.",
      "We always maintain your visual identity and artistic narrative as the main axis.",
    ],
    icon: "UserPen",
  },
  {
    question: "Can I see examples before hiring?",
    answer:
      "Of course, access the demo of our latest Advanced Plan Capsule and check real cases of DJs who have already professionalized their image on our networks.",
    icon: "Eye",
    link: "https://template-avanzado.dj-presskit.com",
    linkText: "EXPLORE DEMO",
  },
  {
    question: "What if I later want to update or scale my site?",
    answer: [
      "You can modify your events calendar or manage the upload of new photos for the gallery.",
      "Most of your Presskit content is updated automatically, as it is integrated with your artist tools.",
      "We offer ongoing support and referral plans for DJs who recommend our services.",
      "You become part of a community of artists in constant evolution.",
    ],
    icon: "PencilRuler",
  },
];

export const CAPSULES: Capsule[] = [
  {
    title: "Genesis Capsule",
    description:
      "The first concept.\nA starting point.\nGenesis is not just a set of websites; it's the beginning of a new way to show yourself with clarity and professionalism. From scattered links to purpose-driven branding. This is where the idea of DJ Presskit was born as a community and standard.",
    projects: [
      { name: "Giuliano", web: "https://giuliano.dj-presskit.com", image: "/images/genesis-capsule/giuliano.webp", color: "#c8b6ff" },
      { name: "Servando", web: "https://servando.dj-presskit.com", image: "/images/genesis-capsule/servando.webp", color: "#0561a3" },
      { name: "Rolling", web: "https://rolling.dj-presskit.com", image: "/images/genesis-capsule/rolling.webp", color: "#4a1dce" },
      { name: "DEXTHER", web: "https://dexther.dj-presskit.com", image: "/images/genesis-capsule/dexther.webp", color: "#9642f5" },
      { name: "LUCIANO", web: "https://lucianobedini.dj-presskit.com", image: "/images/genesis-capsule/luciano.webp", color: "#42a4f5" },
      { name: "SERENA", web: "https://serena.dj-presskit.com", image: "/images/genesis-capsule/serena.webp", color: "#707070" },
      { name: "JOACO", web: "https://joacoibanez.dj-presskit.com", image: "/images/genesis-capsule/joaco.webp", color: "#314097" },
      { name: "Pupi Jaet", web: "https://pupijaet.dj-presskit.com", image: "/images/genesis-capsule/pupi-jaet.webp", color: "#e5e5e5" },
      { commingSoon: true, name: "Matias", web: "", image: "", color: "" },
      { name: "Kebin Van Reeken", web: "https://kebinvanreeken.dj-presskit.com", image: "/images/genesis-capsule/kebin-van-reeken.webp", color: "#501269" }
    ],
  },
];


