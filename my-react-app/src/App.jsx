import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  function callfun(){
    alert("function call")
  }
  function callapple(){
    alert("click apple button")
  }
  function callbanana(){
    alert("clicl banana button")
  }

  return (
    <div>
      
<button onClick={callfun}>ok</button>
<button onClick={callapple}>apple</button>
<button onClick={callbanana}>banana</button>
    <h1>welcome in new project</h1>
  
    </div>
   
  )
}



export default App
