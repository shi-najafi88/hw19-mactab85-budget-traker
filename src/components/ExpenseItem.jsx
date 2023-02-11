import React , {useContext} from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import styled from 'styled-components'
import { store } from "./context/Contexts";

const ItemContainer = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid lightgray;    
`;

const Wrapper_cost_close = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Cost = styled.span`
    background-color: #1fa1ed;
    border-radius: 15%;
    padding: .2rem .8rem;
    color: white;
`

const ExpenseItem = ({item})=> {

    const {setId , setModalStatus}= useContext(store)

    const ShowModal =()=> {
        setModalStatus('visible')
        setId(item.id)
    }

    return(
        <ItemContainer>
          <span>{item.name}</span>
          <Wrapper_cost_close>
            <Cost>{item.cost}</Cost>
            <AiFillCloseCircle onClick={ShowModal} style={{fontSize:'1.3rem', fill:'red'}}/>
          </Wrapper_cost_close>       
        </ItemContainer>
    )   
}
export default ExpenseItem