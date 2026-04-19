import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const valorMensaje = "Mensaje desde el componente Padre";
  const animalPerro = {
    id: 1,
    nombre: "Max",
    img: "https://th.bing.com/th/id/R.9003028d7ec6ff58a70a2be15a05ffed?rik=9cLEFO6s9oiGeg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fgolden-retriever-dog-1364426710r9x.jpg&ehk=Z8ZK9mRUJe0rT61EYByfWPUGg1BEToYpGPK3bCz1aTU%3d&risl=&pid=ImgRaw&r=0",
    raza: "Golden Retriever",
  };
  return (
    <div>
      <h2>Props | Comunicacion entre componentes Padre-Hijo </h2>
      <Hijo mensaje={valorMensaje} animal={animalPerro}></Hijo>
    </div>
  );
};

export default Padre;
