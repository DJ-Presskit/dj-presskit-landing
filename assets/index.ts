/*
?   Este archivo enlaza todo lo que sea recurso estatico de la carpeta public
?   y crea los types automaticamente para los componentes y el auto completado
*/

export const images = {
  //? Agregar mas backgrounds aca
} as const;
export type ImagesKey = keyof typeof images;

export const backgrounds = {
  //? Agregar mas backgrounds aca
} as const;
export type BackgroundsKey = keyof typeof backgrounds;

export const logos = {
  default_logo: "/logos/default-logo.svg",

  //? Agregar mas logos aca
} as const;
export type LogosKeys = keyof typeof logos;

export const icons = {
  whatsapp: "/icons/whatsapp.svg",
  soundcloud: "/icons/soundcloud.svg",
  
  // 3D Resources
  crown: "/resources/crown.svg",
  thunder: "/resources/thunder.svg",
  clock: "/resources/clock-3d.svg",
  star: "/resources/star.svg",

  //? Agregar mas iconos aca
} as const;
export type IconKey = keyof typeof icons;
