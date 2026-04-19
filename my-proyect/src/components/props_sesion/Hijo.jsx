import React from "react";

const Hijo = (props) => {
  const { mensaje, animal } = props;
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>
        <strong>Mensaje: </strong>
        {mensaje}
      </p>
      <div>
        <p>
          ID: <strong>{animal.id}</strong>
        </p>
      </div>
      <div>
        <img width={150} src={animal.img} alt="" />
      </div>
      <div>
        Nombre: <strong>{animal.nombre}</strong>
      </div>
    </div>
  );
};

export default Hijo;
