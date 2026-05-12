import React from "react";

const Hermano = (props) => {
  return (
    <div className="border-2 border-green-500 m-2 p-4">
      <h2>Este es un componente hermano</h2>
      <div>
        <p>
          Hola: <span>{props.userName}</span>
        </p>
      </div>
    </div>
  );
};

export default Hermano;
