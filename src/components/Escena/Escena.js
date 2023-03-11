
import React from 'react'
import StyledEscena from './StyledEscena'





const Escena = ({ first, second, third, forth }) => {


    return (
        <>
            <StyledEscena className="escena" >{first}</StyledEscena>
            <StyledEscena className="escena" >{second}</StyledEscena>
            <StyledEscena className="escena" >{third}</StyledEscena>
            <StyledEscena className="escena" >{forth}</StyledEscena>

        </>

    )
}
export default Escena


/*{ frases.map((frase)=>(
    <StyledEscena className="escena" >{frase}</StyledEscena>
    ))}*/