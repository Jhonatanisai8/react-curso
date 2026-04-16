import "./App.css";
import Menu from "./components/Menu";

console.log("Hola Mundo");
function App() {
  const saySomething = () => {
    console.log("Something");
  };
  return (
    <>
      <Menu></Menu>
      <h1 onClick={saySomething}>Hola</h1>
    </>
  );
}

export default App;
