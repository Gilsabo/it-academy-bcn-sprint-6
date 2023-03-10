import './App.css';
import FirstComponent from './components/Escena/Escena';
import dataHistory from './frases';


function App() {
  return (
    <>
      <FirstComponent frase={dataHistory[0]} />
      <FirstComponent frase={dataHistory[1]} />
      <FirstComponent frase={dataHistory[2]} />
      <FirstComponent frase={dataHistory[3]} />
    </>
  )
}

export default App;