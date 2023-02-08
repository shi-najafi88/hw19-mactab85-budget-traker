import { useContext, useReducer} from 'react'
import BudgetbOX from './BudgetBox'
import Input from './Input'
import ExpenseItem from './ExpenseItem'
import Button from './Button'
import styled from 'styled-components'
import { store } from './context/Contexts'


const Container = styled.div`
width:75vw;
padding: 2rem 3.5rem;
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
gap: 1rem;
font-family: Arial, Helvetica, sans-serif;
position: relative;
`;
const Header = styled.h2`
 margin-right: 37rem;
`;
const Wrapper_budget = styled.div`
display: flex;
padding: 1rem;
gap: 2rem;
width: 80%; 
`;
const Wrapper_search = styled.div`
width:60vw;
display: flex;
flex-direction: column;
gap: 0.5rem;  
`;
const H4 = styled.div`
font-weight: 100;  
`
const Wrapper_allItems = styled.div`
width: 60vw;
border: .5px solid lightgray;
border-radius: 10px;
overflow: hidden;
`;
const WrapperAddExpense =styled.div`
width: 60vw;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;
const H3 = styled.h3`
  margin: 1rem 0;
  font-weight: 100;
`;
const Wrapper_lable = styled.div`
  display: flex;
  gap: 11rem;
  font-size: .8rem;
  color: gray;
`;
const Wrapper_input = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
`;
////////////////////////////////////////


function Main() {
  
 const {expenseObj, setExpenseObj, state , dispatch}= useContext(store)

  const ChangeHandlerName = (event)=> {
    setExpenseObj({...expenseObj, name:event.target.value})
  }

  const ChangeHandlerCost = (event)=> {
    setExpenseObj({...expenseObj, cost:event.target.value})
  }

  const AddHandler = ()=> {
    dispatch({
      type:"SAVE",
      payload:{
      name:expenseObj.name,
      cost:expenseObj.cost
      }
      })
      setExpenseObj({...expenseObj, name:"", cost:""})
    }

  return (
    <Container>
      <Header>My Budget Planner</Header>

      <Wrapper_budget>
        <BudgetbOX state={'editBtn'} color={'lightgray'} lable={"Budget:"} price={"2000$"}/>
        <BudgetbOX color={'lightgreen'} lable={"Remaining:"} price={"2000$"}/>
        <BudgetbOX color={'lightblue'} lable={"SpendSoFar:"} price={"2000$"}/>
      </Wrapper_budget>

      <Wrapper_search>
        <H4>Expenses</H4> 
        <Input placeholder={"Type To Search..."}/>
      </Wrapper_search> 

      <Wrapper_allItems>
       {state.map(item => {
         return <ExpenseItem item={item} key={item.id} />
       })}
      </Wrapper_allItems>

      <WrapperAddExpense>
        <H3>Add Expense</H3>
        <Wrapper_lable>
          <label>Name</label>
          <label>Cost</label>
        </Wrapper_lable>

        <Wrapper_input>
          <Input changeHandlers={ChangeHandlerName} value={expenseObj.name} />
          <Input changeHandlers={ChangeHandlerCost} value={expenseObj.cost}/>
        </Wrapper_input>

        <Button clickAdd={AddHandler} stateBtn={'save'}>Save</Button>
      </WrapperAddExpense>  
      
    </Container>
  )
}

export default Main
