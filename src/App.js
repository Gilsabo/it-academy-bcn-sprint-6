import "./App.css";
import Escena from "./components/Escena/Escena";
import frases from "./frases";
import { useState } from "react";

function App() {
  const Principal = () => {
    const [isPrincipal, setPrincipal] = useState(true);
    const buttonHandler = () => {
      setPrincipal(false);
    };

    return (
      <>
        <div>
          {isPrincipal ? (
            <div className="box-welcome">
              <div className="welcome">
                <h3>Welcome !</h3>
                <p>This is my first app with React. I am learning and using:</p>
                <ul>
                  <li>Rendering lists</li>
                  <li>UseState hook</li>
                  <li>Condicitional rendering</li>
                </ul>
                <p className="last-text">
                  After you click the button, you can interact with the back and
                  next button <br /> to navigate through the story
                </p>
                <button onClick={buttonHandler}>Click to start</button>
              </div>
            </div>
          ) : (
            <Escena frases={frases} />
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <Principal />
    </>
  );
}

export default App;
