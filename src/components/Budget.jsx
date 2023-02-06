import React from "react";
import styled from 'styled-components'
import Button from "./Button";

const BudgetBox = styled.div`
width: 27%;
height: 2rem;
background-color: lightgray;
color: #202020;
border-radius: 5px;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

`

const Budget = ()=> {
    return(
        <>
          <BudgetBox>Budget:2000$ <Button /></BudgetBox>
        </>
        
    )
}
export default Budget