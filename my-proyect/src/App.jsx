import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

console.log("Hola Mundo");
function App() {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
    console.log(numero);
  };

  const saySomething = () => {
    console.log("Something");
  };
  return (
    <>
      <Menu></Menu>
      <h1 onClick={saySomething}>Hola</h1>
      <h2>Numero: {numero}</h2>
      <button onClick={aumentar}>Aumentar Contador</button>
    </>
  );
}

export default App;
