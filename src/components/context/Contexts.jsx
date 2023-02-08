import React, { useReducer, useState } from "react";
import { Reducer } from "./Reducer";

export const store = React.createContext({
    state:[],
    dispatch: (dispatch)=>[],
    expenseObj:{},
    setExpenseObj:()=>{},
    modalStatus:'hiden',
    setModalStatus:()=>{},
    id:"",
    setId:()=>{}
}) 

const ContextProvider = ({children})=> {
    const [state , dispatch] = useReducer(Reducer , [])
    const [modalStatus , setModalStatus] = useState('hiden')
    const [expenseObj , setExpenseObj] = useState({
        name:"",
        cost:"",
        id : ""
    })
    const [id , setId] = useState()
  
    return(
        <store.Provider value={{
            state , dispatch,
            expenseObj , setExpenseObj,
            modalStatus , setModalStatus,
            id , setId        
        }}>{children}</store.Provider>
    )
}

export default ContextProvider