import { useState } from 'react'
import Budget from './components/Budget'
import Remaining from './components/Remaining'
import SpendSoFar from './components/Spendsofar'
import Input from './components/Input'
import ExpenseItem from './components/ExpenseItem'
import Button from './components/Button'
import styled from 'styled-components'
import './App.css'


const Container = styled.div`
width:75vw;
height: 100vh;
padding: 2rem 3.5rem;
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
gap: 1rem;
background-color: #f8f8f8;
font-family: Arial, Helvetica, sans-serif;
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
`

const H4 = styled.div`
font-weight: 100;
  
`

const Wrapper_allItems = styled.div`
width: 60vw;
border: .5px solid lightgray;
border-radius: 10px;
overflow: hidden;
`

const WrapperAddExpense =styled.div`
width: 60vw;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const H3 = styled.h3`
  margin: 1rem 0;
  font-weight: 100;
`

const Wrapper_lable = styled.div`
  display: flex;
  gap: 11rem;
  font-size: .8rem;
  color: gray;
`

const Wrapper_input = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
`

function App() {

  return (
    <Container>
      <Header>My Budget Planner</Header>

      <Wrapper_budget>
        <Budget/>
        <Remaining/>
        <SpendSoFar/>
      </Wrapper_budget>

      <Wrapper_search>
        <H4>Expenses</H4> 
        <Input placeholder={"Type To Search..."}/>
      </Wrapper_search> 

      <Wrapper_allItems>
        <ExpenseItem/>
        <ExpenseItem/>
        <ExpenseItem/>
      </Wrapper_allItems>

      <WrapperAddExpense>
        <H3>Add Expense</H3>
        <Wrapper_lable>
          <label>Name</label>
          <label>Cost</label>
        </Wrapper_lable>

        <Wrapper_input>
          <Input/>
          <Input/>
        </Wrapper_input>

        <Button/>
      </WrapperAddExpense>  
      
    </Container>
  )
}

export default App
