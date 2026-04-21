import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowHide from './viva2'
import Counter from './viv'
import TextInput from './viva3' 
import LikeButton from './v5'



function App(){
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
     {/* style={{ textAlign: 'center', marginTop: '20px' }} */}
      {/* Displaying the present state
      <h3>The current state is: {isOn ? "ON" : "OFF"}</h3>

      <button 
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: isOn ? '#4CAF50' : '#ccc'
        }}
      >
        Click to Toggle
      </button> */}


      {<Counter />}
      {<ShowHide />}
      {<TextInput />}
      {<LikeButton />}
    </div>
  );
}

export default App
