import React from "react";
import StyledEscena from "./StyledEscena";
import { useState } from "react";
import ScreenButtons from "../ScreenButtons/ScreenButtons";


const Escena = ({ frases }) => {
  const [indexFrase, setIndexFrase] = useState(0);

  const paintAnterior = () => {
    if (indexFrase === 0) {
      return;
    }
    setIndexFrase(indexFrase - 1);

  };
  const paintSeguent = () => {
    if (indexFrase === 3) {
      return;
    }
    setIndexFrase(indexFrase + 1);
  };

  return (
    <div>
      <div>
        <ScreenButtons
          paintAnterior={paintAnterior}
          paintSeguent={paintSeguent}
        />
      </div>
      <div>
        {frases.map((fraseItem, index) => (
          <StyledEscena
            key={index}
            style={{
              backgroundColor: indexFrase === index ? "#FFC0CB" : "white",
            }}
          >
            {fraseItem.txt}
          </StyledEscena>
        ))}
      </div>
      <div className="background" style={{ backgroundImage: `url(${frases[indexFrase].img})` }}></div>
    </div>
  );
};

export default Escena;

