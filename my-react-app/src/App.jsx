import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let data = "Demo"
  function updata(){
    data = "example"
    alert(data)
  }
  
return(
  <div>
    <h1>example of arrow</h1>
    <h1>{data}</h1>
    <button onClick={updata}>click to update</button>
</div>
)
}

  

    
    
    
   
  




export default App
