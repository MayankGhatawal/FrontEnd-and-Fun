import React, { useEffect, useState } from 'react';
import './App.css';

function App(){
  const [counter, setCounter] = useState(0)
  function Increment(){
    setCounter(counter + 1)
  }
  function Decrement(){
    setCounter(counter - 1);
  }

  useEffect(()=>{
    document.title = counter
  }, [counter]);
  return(
    <>
        <div className='for'>
        <button onClick={Increment}>+</button>
        <h1>{counter}</h1>
        <button onClick={Decrement}>-</button>
        </div>
        
    </>
  );
}

export default App;
