"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "../components/Text/Text";
import {
  CheckCheck,
  ChevronDown,
  Clock,
  Eye,
  Lightbulb,
  PencilRuler,
  Pin,
  Wrench,
} from "lucide-react";
import GradientIcon from "@/components/Icons/GradientIcon";
import { FAQItemType } from "@/@types";
import { twMerge } from "tailwind-merge";
import LandingLink from "@/components/LandingLink/LandingLink";

const faqData: FAQItemType[] = [
  {
    type: "custom",
    question: "¿Qué incluye el presskit?",
    answer: (
      <div className="flex flex-col items-start">
        <Text variant="content" className="text-neutral-500 text-left">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Sitio web personalizado y responsive en menos de en menos de 72
              horas hábiles
            </li>
            <li>Tu biografía y redes sociales integradas</li>
            <li>Galería de imágenes para mostrar tu trabajo</li>
            <li>
              Carpeta de Google Drive con <strong>25 GB</strong> para subir lo
              que necesites
            </li>
            <li>Sección de próximos eventos sincronizados a Google Sheets</li>
            <li>Formulario de contacto sincronizado a Google Sheets</li>
            <li>
              Dominio tipo{" "}
              <strong>
                <code>[Tu Nombre].dj-presskit.com</code>
              </strong>
            </li>
            <li>
              Email personalizado tipo{" "}
              <strong>
                <code>[Tu Nombre]@dj-presskit.com</code>
              </strong>
            </li>
            <li>Hosting y Certificados HTTPS</li>
          </ul>
        </Text>
      </div>
    ),
    icon: <CheckCheck size={30} />,
  },

  {
    question: "¿Qué necesito para tener mi presskit?",
    answer:
      "Solo tenés que completar un formulario con tu información (bio, redes, rider técnico, imagenes, etc...) y agendar una reunión inicial. Con eso, nosotros nos encargamos del resto.",
    icon: <Pin size={30} />,
  },
  {
    question: "¿Cuánto tarda en estar listo mi presskit?",
    answer:
      "Tu presskit estará online y listo para compartir en menos de 72 horas hábiles desde que recibimos todo el contenido necesario.",
    icon: <Clock size={30} />,
  },

  {
    question: "¿Puedo modificar la información de mi sitio después?",
    answer:
      "Sí. Te vamos a dar acceso a una carpeta en Google Drive donde podés actualizar tu calendario de eventos o subir nuevos. Nosotros nos encargamos de que se refleje automáticamente en tu web.",
    icon: <PencilRuler size={30} />,
  },
  {
    question: "¿Qué diferencia tiene esto con usar Linktree o Instagram?",
    answer:
      "Esto es una web real, profesional, con diseño, dominio propio y tu contenido estructurado de forma clara. No solo te destacás frente a otros DJs, también proyectás seriedad y estilo.",
    icon: <Lightbulb size={30} />,
  },
  {
    type: "custom",
    question: "¿Puedo ver cómo queda antes de pagar?",
    answer: (
      <Text variant="content" className="text-neutral-500 text-left flex">
        Sí, podés ver un demo de nuestra última plantilla de presskit{" "}
        <LandingLink
          href={"https://template.dj-presskit.com"}
          newTab
          className="hover:opacity-50"
        >
          <strong>clickeando acá</strong>.
        </LandingLink>{" "}
        Si te gusta, agendamos una llamada y arrancamos.
      </Text>
    ),
    icon: <Eye size={30} />,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-py section-px section-max-w mx-auto">
      <div className="flex flex-col items-center gap-10 mb-[10vh]">
        <Text
          Tag={"h4"}
          variant="title"
          className="bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 text-transparent py-4"
        >
          Preguntas Frecuentes
        </Text>
        <Text variant="content" className="">
          Resolvé tus dudas sobre nuestro servicio de presskit profesional
        </Text>
      </div>
      <div className="space-y-5">
        {faqData.map((item, index) => (
          <FAQItem
            idx={index}
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

const FAQItem = ({
  item,
  isOpen,
  onClick,
  idx,
}: {
  item: FAQItemType;
  isOpen: boolean;
  onClick: () => void;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: idx * 0.2,
        ease: "easeOut",
      }}
      className="border-2 border-neutral-500 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="w-full p-5 md:p-8 flex items-center justify-between group cursor-pointer gap-5 md:gap-8"
      >
        <div className="flex items-center gap-5 md:gap-8">
          <GradientIcon
            icon={item.icon}
            className={twMerge(isOpen && "[&>svg]:stroke-accent")}
          />
          <Text
            Tag={"h5"}
            variant="subtitle"
            className="text-left text-sm xl:text-xl"
          >
            {item.question}
          </Text>
        </div>
        <ChevronDown
          className={`w-8 h-8 transition duration-300 group-hover:stroke-accent ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0">
              {item.type === "custom" ? (
                item.answer
              ) : (
                <Text variant="content" className="text-neutral-500">
                  {item.answer}
                </Text>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
