import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <header>
        <h1>Counter App</h1>
      </header>
      <section className="counter-container">
        <h2 className="counter-value">Total : {count}</h2>
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button reset-button" onClick={reset}>Reset</button>
      </section>
    </div>
  )
}

export default Counter


