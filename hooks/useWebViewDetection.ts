"use client";

import { useEffect, useState } from "react";

export const useWebViewDetection = () => {
  const [isWebView, setIsWebView] = useState(false);
  const [isInstagramWebView, setIsInstagramWebView] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent;

      // Detectar iOS
      const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
      setIsIOS(isIOSDevice);

      // Detectar WebViews de apps sociales
      const isWebViewApp =
        /(Instagram|FBAN|FBAV|Line|Twitter|WhatsApp|Telegram|Snapchat|TikTok)/i.test(
          userAgent
        );
      setIsWebView(isWebViewApp);

      // Detectar específicamente Instagram
      const isInstagram = /Instagram/i.test(userAgent);
      setIsInstagramWebView(isInstagram);
    }
  }, []);

  return {
    isWebView,
    isInstagramWebView,
    isIOS,
    shouldReduceAnimations: isWebView || isInstagramWebView,
    shouldUseSafeHeight: isIOS,
  };
};
