import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoListas from "./components/RenderizadoListas";
import RenderizadoObjetos from "./components/RenderizadoObjetos";
// import Padre from "./components/props_sesion/Padre";
import ClaseNameSesion from "./components/ClaseNameSesion";
import Padre from "./components/props_sesion01/Padre";
import Example from "./components/axios-api/Example";
import FormularioExample from "./components/formularios/FormularioExample";
// import Example from "./components/fetch-api/Example";

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

    // <RenderizadoCondicional></RenderizadoCondicional>
    // <RenderizadoListas></RenderizadoListas>
    // <RenderizadoObjetos></RenderizadoObjetos>
    // <Padre></Padre>
    // <ClaseNameSesion></ClaseNameSesion>
    // <Padre></Padre>
    // <Example></Example>
    // <Example></Example>
    // <Example />
    <FormularioExample />
  );
}

export default App;
