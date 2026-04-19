import React from "react";
import { animales } from "../animales";

const HTMLanimales = animales.map((animal) => {
  return (
    <div key={animal.id}>
      <p>
        <strong>ID:</strong>
        {animal.id}
      </p>
      <p>
        <strong>NOMBRE:</strong>
        {animal.nombre}
      </p>
      <p>
        <strong>IMAGEN:</strong>
        <img width={150} height={100} src={animal.img} alt={animal.nombre} />
      </p>
      <p>
        <strong>RAZA:</strong>
        {animal.raza}
      </p>
      <hr />
    </div>
  );
});

const RenderizadoObjetos = () => {
  return (
    <div>
      <h2>Renderizado de Objetos</h2>
      {HTMLanimales}
    </div>
  );
};

export default RenderizadoObjetos;
