import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <p className="hidden">⪩༏⪨</p>
      {children}
    </>
  );
};

export default Providers;
