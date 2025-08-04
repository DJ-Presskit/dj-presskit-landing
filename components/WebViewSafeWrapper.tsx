"use client";

import { useWebViewDetection } from "@/hooks/useWebViewDetection";
import { ReactNode } from "react";

interface WebViewSafeWrapperProps {
  children: ReactNode;
  className?: string;
}

export const WebViewSafeWrapper = ({
  children,
  className = "",
}: WebViewSafeWrapperProps) => {
  const { shouldReduceAnimations } = useWebViewDetection();

  const wrapperClasses = shouldReduceAnimations
    ? `webview-safe ${className}`
    : className;

  return <div className={wrapperClasses}>{children}</div>;
};
