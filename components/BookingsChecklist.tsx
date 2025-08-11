"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Text from "@/components/Text/Text";
import DecryptedText from "@/components/Text/DecryptedText";
import AnimatedSeparator from "./AnimatedSeparator";

type ChecklistItem = {
  id: string;
  label: string;
  hint?: string;
};

const STORAGE_KEY = "bookings-checklist-v1";
function getInitialItems(): ChecklistItem[] {
  return [
    {
      id: "presskit-actualizado",
      label: "Presskit actualizado (bio, fotos, rider, logos)",
    },
    {
      id: "bio-12-palabras",
      label:
        "Bio clara en 12 palabras (quién sos, géneros, ciudad, diferencial)",
    },
    {
      id: "foto-perfil-pro",
      label: "Foto de perfil profesional (rostro o cabina)",
    },
    {
      id: "piezas-fijadas",
      label: "Piezas fijadas: reel 30–60s, álbum 5 fotos, testimonio",
    },
    {
      id: "link-unico",
      label: "Un solo link con música, próximas fechas y contacto",
    },
    { id: "playlist-bestof", label: "Playlist “Best Of” de 10–12 minutos" },
    {
      id: "lives-completos",
      label: "2 lives completos con títulos claros (Live @ [Club] – Mes Año)",
    },
    { id: "proximas-fechas", label: "Próximas fechas visibles y actualizadas" },
    {
      id: "highlight-bookings",
      label: "Highlight “Bookings” al día (flyers + clips)",
    },
    {
      id: "press-photos-hq",
      label: "Press photos en alta (vertical 9:16 y horizontal 3:4)",
    },
    { id: "logo-png", label: "Logo/wordmark en PNG transparente" },
    {
      id: "rider-tecnico",
      label: "Rider técnico actualizado (setup, canales, necesidades)",
    },
    {
      id: "hospitality-rider",
      label: "Hospitality rider claro (bebidas, camarín, traslados, etc.)",
    },
    {
      id: "stage-plot",
      label: "Stage plot simple (posición de equipos y conexiones)",
    },
    {
      id: "contacto-visible",
      label: "Contacto visible (WhatsApp/mail) en bio y landing",
    },
    {
      id: "mail-profesional",
      label: "Mail profesional o alias (bookings@ o similar)",
    },
    {
      id: "pitch-5-lineas",
      label: "Mensaje/pitch breve en 5 líneas listo para enviar",
    },
    {
      id: "contactos-objetivo",
      label: "Lista de contactos objetivo (clubs, promotorxs, sellos)",
    },
    {
      id: "seguimiento",
      label:
        "Sistema de seguimiento (quién respondió y cuándo volver a escribir)",
    },
    {
      id: "carpeta-drive",
      label: "Carpeta Drive organizada y compartible (Press/Booking)",
    },
  ];
}

export default function BookingsChecklist() {
  const items = useMemo(getInitialItems, []);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw =
        typeof window !== "undefined"
          ? localStorage.getItem(STORAGE_KEY)
          : null;
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, boolean>;
        setChecked(parsed);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      }
    } catch {
      // ignore write errors
    }
  }, [checked]);

  const completedCount = Object.values(checked).filter(Boolean).length;

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const clearAll = () => setChecked({});

  return (
    <section className="mx-auto max-w-5xl section-py grid gap-10 section-px">
      <header className="flex items-center justify-center gap-2 flex-col">
        <Text Tag="h1" variant="title" className="">
          Checklist para Bookings
        </Text>
        <Text Tag="p" variant="content" className="">
          Marcá tus avances. Se guarda automáticamente en tu dispositivo.
        </Text>
      </header>
      <AnimatedSeparator transformOrigin="center" />

      <div className="sticky top-0 py-5 bg-secondary shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-secondary-lighter/90">
            <Text variant="content">✓</Text>
            <Text variant="content">
              {completedCount} / {items.length} completadas
            </Text>
          </div>
          <Text
            Tag="span"
            variant="content"
            className="text-secondary-lighter/80"
          >
            {Math.round((completedCount / items.length) * 100)}%
          </Text>
        </div>
        <div className="h-2 w-full rounded-full bg-secondary-lighter overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent/5 to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(completedCount / items.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          />
        </div>
      </div>

      <ul className="space-y-3">
        {items.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <li
              key={item.id}
              className="flex items-start gap-3 rounded-lg border border-secondary-lighter/20 p-4 bg-secondary/40"
            >
              <label className="flex items-start gap-3 cursor-pointer w-full">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  className="sr-only"
                  aria-label={item.label}
                />

                <motion.span
                  className="flex items-center justify-center size-6 rounded-md border mt-0.5"
                  initial={false}
                  animate={{
                    backgroundColor: isChecked
                      ? "rgba(255,115,51,0.2)" // accent (naranja) con opacidad para el fondo
                      : "rgba(0,0,0,0)",
                    borderColor: isChecked
                      ? "rgb(255,115,51)" // accent (naranja) para el borde
                      : "rgba(255,255,255,0.3)",
                    scale: isChecked ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      d="M5 13l4 4L19 7"
                      className="stroke-accent"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isChecked ? 1 : 0,
                        opacity: isChecked ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.span>

                <div className="flex-1">
                  <motion.div
                    initial={false}
                    animate={{ opacity: isChecked ? 0.75 : 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Text
                      Tag="p"
                      variant="content"
                      className={`text-left ${isChecked ? "line-through" : ""}`}
                    >
                      {item.label}
                    </Text>
                  </motion.div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>

      <Text variant="content" className="!text-xs  text-accent-2">
        Consejo: compartí este enlace con tu equipo o manager para coordinar
        tareas.
      </Text>
    </section>
  );
}
