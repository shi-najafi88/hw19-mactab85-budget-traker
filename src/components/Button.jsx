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

const Button = ()=> {
    return(
        <Btn>SAVE</Btn>

    )
}
export default Button