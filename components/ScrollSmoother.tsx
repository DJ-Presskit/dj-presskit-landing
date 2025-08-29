"use client";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useWebViewDetection } from "@/hooks/useWebViewDetection";

const ScrollSmoother: React.FC<{ children: any }> = ({ children }) => {
  const pathname = usePathname();
  const lenis = useLenis();
  const { shouldReduceAnimations } = useWebViewDetection();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  // Si estamos en WebView, no usar Lenis para evitar problemas
  if (shouldReduceAnimations) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      {children}
    </ReactLenis>
  );
};

export default ScrollSmoother;
