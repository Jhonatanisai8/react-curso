import React, { useState } from "react";
import Hijo from "./Hijo";

const Example = () => {
  const [mostrarHijo, setMostrarHijo] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        useEffect() | ciclo de vida de un componente
      </h1>
      <button
        className="border border-red-500 border-solid bg-amber-200"
        onClick={() => setMostrarHijo(!mostrarHijo)}
      >
        Click me
      </button>
      {mostrarHijo && <Hijo></Hijo>}
    </div>
  );
};

export default Example;
