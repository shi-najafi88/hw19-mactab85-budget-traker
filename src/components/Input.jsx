import React from "react";
import styled from 'styled-components'

const InputItem = styled.input`
border: 1px solid lightgray;
border-radius: 5px;
padding: .6rem;
outline: none;
`


const Input = ({placeholder , changeHandlers , keyPrees , value , styling})=> {

    const ChangeInput = (event)=> {
        changeHandlers(event)
    }

    const EnterHandel = (event)=> {
      keyPrees(event)  
    }
    return(
        <InputItem type="text" placeholder={placeholder} onChange={ChangeInput} onKeyDown={EnterHandel} value={value} style={{width: styling}}/>
    )
}
export default Input