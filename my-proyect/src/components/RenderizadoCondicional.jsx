import React from "react";

const RenderizadoCondicional = () => {
  const condicion = false;
  return (
    <div>
      <h2>Rendirizado condicional</h2>
      {/* {condicion && <p>La condicion se cumple aqui:</p>} */}
      {/* operador ternario  */}
      {condicion ? (
        <p>Se cumple la condicion</p>
      ) : (
        <p>No se cumple la condicion</p>
      )}
    </div>
  );
};

export default RenderizadoCondicional;
