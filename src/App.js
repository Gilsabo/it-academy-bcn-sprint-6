import './App.css';
import Escena from './components/Escena/Escena';
import ScreenButtons from './components/ScreenButtons/ScreenButtons';
import frases from './frases';


function App() {
  return (
    <>
      <ScreenButtons />
      <Escena first={frases[0]} second={frases[1]} third ={frases[2]} forth ={frases[3]} />
      
    </>
  )
}

export default App;