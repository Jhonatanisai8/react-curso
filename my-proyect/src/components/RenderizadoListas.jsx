import React from "react";

const frutas = ["Manzana", "Banana", "Naranja"];
const HTMLfrutas = frutas.map((fruta) => {
  return <li key={fruta}>{fruta}</li>;
});
const RenderizadoListas = () => {
  return (
    <div>
      <h2>Renderizado de listas</h2>
      <ol>{HTMLfrutas} </ol>
    </div>
  );
};

export default RenderizadoListas;
