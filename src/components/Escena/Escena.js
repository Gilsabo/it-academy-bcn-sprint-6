
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
border: 1px solid black;
border-radius: 10px;
padding-top:10px;
padding-bottom:10px;
margin-top:10px;
martin-bottom:10px;
text-align:center;

`

const FirstComponent = props => {
    return (
            <StyledButton className="escena">
                {props.frase}
            </StyledButton>
         
    )
}
export default FirstComponent