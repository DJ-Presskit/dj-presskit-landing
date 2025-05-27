import * as React from "react";
import { twMerge } from "tailwind-merge";

interface GradientIconProps {
  icon: React.ReactNode;
  className?: string;
}

const GradientIcon: React.FC<GradientIconProps> = ({ icon, className }) => {
  return (
    <div
      className={twMerge(
        "relative border-2 p-2 rounded-2xl border-neutral-500 transition duration-800"
      )}
    >
      <div className={className}>{icon}</div>
    </div>
  );
};

export default GradientIcon;
