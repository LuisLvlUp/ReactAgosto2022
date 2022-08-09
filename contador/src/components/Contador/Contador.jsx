import React, { useState } from 'react'
import './Contador.css'

export const Contador = () => {

  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className='contador-container'>
      <div>
        <button className='operacion-btn' onClick={decrementar}>
          -
        </button>
        <span>
          {count}
        </span>
        <button className='operacion-btn' onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button className='reset-btn' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}
