import React from "react";
import ScrollSmoother from "./ScrollSmoother";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ScrollSmoother>
        <p className="hidden">⪩༏⪨</p>
        {children}
      </ScrollSmoother>
    </>
  );
};

export default Providers;
