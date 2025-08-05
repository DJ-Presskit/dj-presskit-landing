"use client";
import { useWebViewDetection } from "@/hooks/useWebViewDetection";
import { useState } from "react";
import Text from "./Text/Text";
import { X, MoreHorizontal, ExternalLink } from "lucide-react";

export const WebViewWarning = () => {
  const { isInstagramWebView, isIOS } = useWebViewDetection();
  const [isVisible, setIsVisible] = useState(true);

  if (!isInstagramWebView || !isIOS) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen z-[9999] backdrop-blur-xl p-5">
          <X
            className="size-6 absolute top-5 right-5 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setIsVisible(false)}
          />

          <div className="flex flex-col items-center gap-5 shadow-2xl border-2 border-accent-2 rounded-xl p-6 max-w-sm">
            <Text
              variant="content"
              className="text-accent-2 font-bold uppercase text-center"
            >
              Estás viendo esta página dentro de Instagram
            </Text>
            <Text variant="content" className="text-center">
              Para una mejor experiencia, ábrela en tu navegador siguiendo estos
              pasos:
            </Text>

            <div className="flex flex-col gap-2 w-full">
              {[
                {
                  texto1: "Toca los",
                  Icono: MoreHorizontal,
                },
                {
                  texto1: "Selecciona",
                  Icono: ExternalLink,
                },
              ].map((paso, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 px-5 py-3 bg-black border-2 border-accent-2 rounded-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-accent-2 text-white rounded-full aspect-square text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <Text variant="content" className="text-sm text-white">
                      {paso.texto1}
                    </Text>
                    <paso.Icono className="size-6 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <Text
              variant="content"
              className="text-xs text-gray-500 text-center mt-2"
            >
              Esto te dará acceso completo a todas las funciones del sitio
            </Text>
          </div>
        </div>
      )}
    </>
  );
};
