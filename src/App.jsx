import React , {useContext} from 'react'
import Main from './components/Main'
import ModalPortal from './components/ModalPortal'
import {store} from './components/context/Contexts'


function App() {

  const {modalStatus}= useContext(store)

  return (
   <div>
    {modalStatus == 'visible'? <ModalPortal/> : <Main/>}
    {/* <Main/>
    <ModalPortal/> */}
   </div>
  )
}

export default App
