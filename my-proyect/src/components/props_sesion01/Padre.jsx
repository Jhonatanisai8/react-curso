import React, { useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const [display, setDisplay] = useState("");
  const login = (name) => {
    setDisplay(name);
  };
  return (
    <div className="border-4 border-indigo-500 p-4 m-2">
      <h1 className="text-center text-xl ">Props | Comunicacion Hijo-Padre</h1>
      <h2>
        <span className="text-lg font-bold">Hola:</span> {display}
      </h2>
      <Hijo handlerLogin={login}></Hijo>
    </div>
  );
};

export default Padre;
