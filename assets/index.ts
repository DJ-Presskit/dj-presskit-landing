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
  default_logo: "/logos/default-logo.png",

  //? Agregar mas logos aca
} as const;
export type LogosKeys = keyof typeof logos;

export const icons = {
  whatsapp: "/icons/whatsapp.svg",

  //? Agregar mas iconos aca
} as const;
export type IconKey = keyof typeof icons;
