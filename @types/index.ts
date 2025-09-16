import React from "react";

export type FAQItemType = {
  type?: "custom";
  question: string;
  answer: string | React.ReactElement;
  icon: React.ReactElement;
};

export type PlanType = {
  id?: string;
  title: string;
  description: string;
  price: number;
  includes: string[];
  href: string;
  buttonText: string;
  discount?: number;
  discountText?: string;
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
  commingSoon?: boolean;
  demoUrl?: string;
};
