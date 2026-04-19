import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import RenderizadoCondicional from "./components/RenderizadoCondicional";

function App() {
  // const [numero, setNumero] = useState(0);

  // const aumentar = () => {
  //   setNumero(numero + 1);
  //   console.log(numero);
  // };

  // const saySomething = () => {
  //   console.log("Something");
  // };

  // const [miTexto, setMiTexto] = useState("Tu Nombre");
  // const [miValorTexto, setMiValorTexto] = useState("Valor");

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setMiValorTexto(e.target.value);
  // };
  return (
    // <>
    //   <Menu></Menu>
    //   <h1 onClick={saySomething}>Hola</h1>
    //   <h2>Numero: {numero}</h2>
    //   <button onClick={aumentar}>Aumentar Contador</button>
    //   <hr />

    //   <div>
    //     <h1>Hola a todos</h1>
    //     <h3>{miValorTexto}</h3>
    //     <input
    //       type="text"
    //       placeholder={miTexto}
    //       value={miValorTexto}
    //       onChange={handleInput}
    //     />
    //   </div>
    // </>

    <RenderizadoCondicional></RenderizadoCondicional>
  );
}

export default App;
