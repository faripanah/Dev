import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);


  const updateDark = () => {
    setTheme('dark');
  }
  const updateLight = () => {
    setTheme('light');
  }
  const handleIncrement= ()=> {
    setCount(prevCount => prevCount + 1);
  }
  const handleDecrement = ()=> {
    setCount(count-1);
  }
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={updateDark}>Dark</button>
      <button onClick={updateLight}>Light</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;