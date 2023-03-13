import React from "react";
import StyledEscena from "./StyledEscena";
import { useState } from "react";
import StylesScreenButtons from "../ScreenButtons/StyledScreenButtons";

const Escena = ({ frases }) => {
  const [indexFrase, selectedIndex] = useState(0);

  const paintAnterior = () => {
    if(indexFrase === 0){
    return console.log(0)
    }
    selectedIndex(indexFrase - 1);
  };
  const paintSeguent = () => {
    if(indexFrase === 3){
        return console.log(1)
        
    }
    selectedIndex(indexFrase + 1);
  };

  return (
    <div>
      <div>
        <StylesScreenButtons onClick={paintAnterior}>
          Anterior
        </StylesScreenButtons>
        <StylesScreenButtons onClick={paintSeguent}>
          Següent
        </StylesScreenButtons>
      </div>
      <div>
        {frases.map((fraseItem, index) => (
          <StyledEscena
            key={index}
            style={{
              backgroundColor: indexFrase === index ? "#FFC0CB" : "white",
            }}
          >
            {fraseItem}
          </StyledEscena>
        ))}
      </div>
    </div>
  );
};

export default Escena;

/*{ frases.map((frase)=>(
    <StyledEscena className="escena" >{frase}</StyledEscena>
    ))}*/

// #ffc0cb

/*if(secondRef.current.style.backgroundColor === color ){
            setColor('#FFC0CB')
            secondRef.current.style.backgroundColor=  'white'
            firstRef.current.style.backgroundColor= color
           console.log('1a')
        }else if(thirdRef.current.style.backgroundColor === '#FFC0CB' ){
            setColor('#FFC0CB')
            
            thirdRef.current.style.backgroundColor=   'white'
            
            secondRef.current.style.backgroundColor= color
            console.log('2a')
        }else if(fourthRef.current.style.backgroundColor !== '' && fourthRef.current.style.backgroundColor ==='white' ){
            setColor('#FFC0CB')
            fourthRef.current.style.backgroundColor=  'white'
            thirdRef.current.style.backgroundColor=  color

            console.log('3a')
        } */

/* if((secondRef.current.style.backgroundColor === '' || secondRef.current.style.backgroundColor === 'white')  && firstRef.current.style.backgroundColor!==''){
        setColor('rgb(255, 192, 203)')
        secondRef.current.style.backgroundColor=  color
       firstRef.current.style.backgroundColor= 'white'
       console.log(1)
    }else if((thirdRef.current.style.backgroundColor=== '' || thirdRef.current.style.backgroundColor=== 'white') && secondRef.current.style.backgroundColor!=='' ){
        setColor('#FFC0CB')
        thirdRef.current.style.backgroundColor=  color
       secondRef.current.style.backgroundColor= 'white'
       console.log(2)
    }else if((fourthRef.current.style.backgroundColor=== '' || fourthRef.current.style.backgroundColor=== 'white') && thirdRef.current.style.backgroundColor!=='' ){
        setColor('#FFC0CB')
        fourthRef.current.style.backgroundColor=  color
        thirdRef.current.style.backgroundColor= 'white'
    } */

/*{{backgroundColor: color2 === 'white' ? 'white' : color1}} */
