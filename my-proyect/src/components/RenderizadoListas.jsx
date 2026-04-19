import React from "react";

const frutas = ["Manzana", "Banana", "Naranja"];
const HTMLfrutas = frutas.map((fruta, index) => {
  return (
    <li key={fruta}>
      {index + 1}-{fruta}
    </li>
  );
});
const RenderizadoListas = () => {
  return (
    <div>
      <h2>Renderizado de listas</h2>
      <div>{HTMLfrutas} </div>
    </div>
  );
};

export default RenderizadoListas;
