import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Hijo = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    // console.log("La variable contador ha cambiado: ", contador);
    return () => {
      console.log("El componente se va a desmontar");
    };
  }, []);
  return (
    <div className=" mt-1 border border-b-amber-700 p-4 text-center  rounded">
      Este es un componente hijo
      <h3>{contador}</h3>
      <button
        className="border p-5 rounded-2xl
      border-blue-500 bg-amber-700 hover: cursor-pointer"
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Aumentar Contador
      </button>
    </div>
  );
};

export default Hijo;
