import React, { useContext } from "react";
import styled from 'styled-components'
import Button from "./Button";
import { store } from "./context/Contexts";
import  ReactDOM from "react-dom";

const ModalOverlay = styled.div`
 position: absolute;
    background-color: rgba(14, 92, 180, 0.575);
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

const ModalPortal = ()=> {

    const {dispatch ,modalStatus , setModalStatus, id , setId} = useContext(store)

    if (!modalStatus) return null
 
    //yes delet expense Item
    const DeletHandler = (id)=> {  
        dispatch({
            type: "DELET",
            payload:{
                id
            }
        })   
        setModalStatus('hiden')
        setId('')
    }

    //dont delet &close modal
    const DontDelet = ()=> {
        setModalStatus('hiden')
        setId('')
    }
  
    return ReactDOM.createPortal( 
        <ModalOverlay>
            <ModalWrapper>
                <ModalText>
                    Are you sure delet expense item?
                </ModalText>
                <WrapperBtn>
                    <Button clickYesModal={()=>DeletHandler(id)} stateBtn={'yesDelet'} styling={"red"}>Yes</Button>
                    <Button clickNoModal={DontDelet} stateBtn={'noDelet'}>No</Button>
                </WrapperBtn>
            </ModalWrapper>
        </ModalOverlay>,

        document.getElementById('portal') // for root
    )
}
export default ModalPortal