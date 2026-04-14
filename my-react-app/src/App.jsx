import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [isToggled, setIsToggled] = useState(false);
const handClick = () => {
setIsToggled(!isToggled);
};
return(
  <>
  <h1>example of arrow</h1>
  <button onclick={handleClick}>
  {isToggled ? 'ON'  :  'OFF'}
  </button>
</>
)
}

export default App
