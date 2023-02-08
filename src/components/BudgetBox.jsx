import React from "react";
import styled from 'styled-components'
import Button from "./Button";

const BudgetBox = styled.div`
width: 27%;
height: 2rem;
color: #202020;
border-radius: 5px;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`

const BudgetbOX = ({color,lable,price,state})=> {
    return(
        <>
          {state === 'editBtn' ?
          <BudgetBox style={{backgroundColor:color}}>Budget:2000$<Button children={"Edit"} /></BudgetBox>
          :
          <BudgetBox style={{backgroundColor:color}}>{lable+price}</BudgetBox>
           }    
        </>       
    )
}
export default BudgetbOX