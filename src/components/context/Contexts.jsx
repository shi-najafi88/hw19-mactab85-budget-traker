import React, { useReducer, useState } from "react";
import { Reducer } from "./Reducer";

export const store = React.createContext({
    expenseObj:{},
    setExpenseObj:()=>{},
    state:[],
    dispatch: (dispatch)=>[]
}) 

const ContextProvider = ({children})=> {
    const [state , dispatch] = useReducer(Reducer , [])
    const [expenseObj , setExpenseObj] = useState({
        name:"",
        cost:"",
        id : ""
    })
  
    return(
        <store.Provider value={{
            state , dispatch,
            expenseObj , setExpenseObj        
        }}>{children}</store.Provider>
    )
}

export default ContextProvider