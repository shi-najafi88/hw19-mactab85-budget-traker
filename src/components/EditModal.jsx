import React from "react";
import styled from 'styled-components'
import Input from "./Input";
import Button from "./Button";


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
    return(
        <ModalOverlay>
            <ModalWrapper>
                <ModalText>
                   Edit total budget:
                </ModalText>
                <Input />
                <WrapperBtn>
                    <Button >Save</Button>
                    <Button >Exit</Button>
                </WrapperBtn>
            </ModalWrapper>
        </ModalOverlay>
    )

}
export default EditModal