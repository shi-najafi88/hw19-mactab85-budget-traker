import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    width: 3.5rem;
    height: 2rem;
    background-color: #4984f3;
    color: aliceblue;
    border-radius: 5px;
    border: none;
`

const Button = ({clickAdd , children , stateBtn , clickYesModal, clickNoModal, id , clickEdit})=> {

    const clickHandler = ()=> {
        if(stateBtn === 'save'){
            clickAdd()
        } else if(stateBtn === 'yesDelet'){
            clickYesModal(id)
        } else if(stateBtn === 'noDelet') {
            clickNoModal()
        } else if(stateBtn === 'edit') {
            clickEdit()
        }   
    }

    return(
        <Btn onClick={clickHandler}>{children}</Btn>
    )
}
export default Button