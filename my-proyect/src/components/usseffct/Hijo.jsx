import React from "react";
import { useEffect } from "react";

const Hijo = () => {
  useEffect(() => {
    console.log("Componente hijo se ah renderizado");
  });
  return (
    <div className=" mt-1 border border-b-amber-700 p-4 text-center  rounded">
      Este es un componente hijo
    </div>
  );
};

export default Hijo;
