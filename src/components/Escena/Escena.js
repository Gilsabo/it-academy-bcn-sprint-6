
import React from 'react'
import StyledButton from './StyledButton'



const FirstComponent = props => {
    return (
            <StyledButton className="escena">
                {props.frase}
            </StyledButton>
         
    )
}
export default FirstComponent