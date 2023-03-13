import "./App.css";
import Escena from "./components/Escena/Escena";
import frases from "./frases";

function App() {
  return (
    <>
      <Escena frases={frases} />
    </>
  );
}

export default App;
