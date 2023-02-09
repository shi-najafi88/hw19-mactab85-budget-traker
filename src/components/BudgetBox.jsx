import React, {useContext} from "react";
import styled from 'styled-components'
import Button from "./Button";
import { store } from "./context/Contexts";

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

const BudgetbOX = ({color,lable,state,price})=> {
    const {setTotalBudget} = useContext(store)

    const EditHandler = ()=> {
        setTotalBudget({editmood:true})     
     }

    return(
        <>
          {state === 'editBtn' ?
          <BudgetBox style={{backgroundColor:color}}>{lable+price}$<Button children={'Edit'} clickEdit={EditHandler} stateBtn={"edit"} /></BudgetBox>
          :
          <BudgetBox style={{backgroundColor:color}}>{lable+price+'$'}</BudgetBox>
          }    
        </>       
    )
}
export default BudgetbOX