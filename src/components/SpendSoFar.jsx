import React from 'react'
import styled from 'styled-components'

const SpendSoFarBox = styled.div`
width: 27%;
height: 2rem;
background-color: #a8e0f3;
color: #202020;
border-radius: 5px;
padding: 1rem;
`

const SpendSoFar = ()=> {
    return(
        <SpendSoFarBox>Spend so far:1040$</SpendSoFarBox>
    )
}
export default SpendSoFar