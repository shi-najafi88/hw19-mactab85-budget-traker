import React, { useContext } from "react";
import styled from 'styled-components'
import Input from "./Input";
import Button from "./Button";
import { store } from "./context/Contexts";


const ModalOverlay = styled.div`
 position: absolute;
    background-color: rgba(66,66,66,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalWrapper = styled.div`
width: 25%;
height: 30vh;
background-color: #e9e9e9;
border-radius: 10px;
display: flex;
gap: 1rem;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ModalText= styled.p`
color: #686767;
font-family: Arial, Helvetica, sans-serif;
`;

const WrapperBtn = styled.div`
display: flex;
gap: 1rem;
`

const EditModal = ()=> {

    let targetVal=''
    const {totalBudget , setTotalBudget } = useContext(store)

    const UpdateBugetPrice =(event)=> {
       targetVal= event.target.value
    }
    const EditBudgetSave = ()=> {    
       setTotalBudget({budget:targetVal,remaining:0,spend:0, editMood:false})   
    }

    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalText>
                   Edit total budget:
                </ModalText>
                <Input changeHandlers ={UpdateBugetPrice} value={totalBudget.budget} />
                <WrapperBtn>
                    <Button editBudget={EditBudgetSave} stateBtn={"saveEdit"}>Save</Button>
                </WrapperBtn>
            </ModalWrapper>
        </ModalOverlay>    
    )
}
export default EditModal