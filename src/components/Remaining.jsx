import React from "react";
import styled from 'styled-components'

const RemainingBox = styled.div`
width: 28%;
height: 2rem;
background-color: #9edf9e;
color: #202020;
border-radius: 5px;
padding: 1rem;
`

const Remaining = ()=> {
    return(
        <RemainingBox>Remaining:1040$</RemainingBox>
    )
}
export default Remaining