import React from "react";

export type FAQItemType = {
  type?: "custom";
  question: string;
  answer: string | React.ReactElement;
  icon: React.ReactElement;
};
