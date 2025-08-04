export const setSafeHeight = () => {
  if (typeof window !== "undefined") {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};

export const initSafeHeight = () => {
  if (typeof window !== "undefined") {
    // Establecer altura inicial
    setSafeHeight();

    // Actualizar en resize y orientation change
    window.addEventListener("resize", setSafeHeight);
    window.addEventListener("orientationchange", setSafeHeight);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", setSafeHeight);
      window.removeEventListener("orientationchange", setSafeHeight);
    };
  }
};
