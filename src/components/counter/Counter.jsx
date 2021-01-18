import React from 'react'
import './Counter.scss'

const Counter = ({counter, setCounter}) => {
  return (
    <div className='btn-counter'>
      <button onClick={() => setCounter(count => count > 1 ? count - 1 : count)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(count => count + 1)}>+</button>
    </div>
  )
}

export default Counter;