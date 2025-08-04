"use client";
import { useWebViewDetection } from "@/hooks/useWebViewDetection";
import { useState } from "react";
import Text from "./Text/Text";
import DefaultButton from "./Buttons/DefaultButton";
import { X } from "lucide-react";

export const WebViewWarning = () => {
  const { isInstagramWebView, isIOS } = useWebViewDetection();
  const [isVisible, setIsVisible] = useState(true);

  if (!isInstagramWebView || !isIOS) return null;

  const openInSafari = () => {
    const currentUrl = window.location.href;
    window.open(currentUrl, "_blank");
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen z-[9999] backdrop-blur-xl p-5">
          <X
            className="size-6 absolute top-5 right-5"
            onClick={() => setIsVisible(false)}
          />

          <div className="flex flex-col items-center gap-2 shadow-2xl border-2 border-accent-2  rounded-xl p-6">
            <Text
              variant="content"
              className="text-accent-2 font-bold uppercase"
            >
              Estás viendo esta página dentro de Instagram
            </Text>
            <Text variant="content">
              Para una mejor experiencia, ábrela en tu navegador.
            </Text>
            <div className="mt-5">
              <DefaultButton onClick={openInSafari}>
                Abrir en Safari
              </DefaultButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
