import React from "react";

export type FAQItemType = {
  type?: "custom";
  question: string;
  answer: string | React.ReactElement;
  icon: React.ReactElement;
};

export type CardItemType = {
  icon: string;
  title: string;
  description: string;
};

export type PlanType = {
  title: string;
  description: string;
  price: number;
  includes: string[];
  href: string;
  buttonText: string;
  discount?: number;
};

export type Project = {
  name: string;
  web: string;
  image: string;
  color: string;
  commingSoon?: boolean;
  // Puedes agregar más campos si lo necesitas
};

export type Capsule = {
  title: string;
  description: string;
  projects: Project[];
};
