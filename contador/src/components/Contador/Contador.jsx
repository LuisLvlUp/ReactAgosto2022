import React from 'react'
import { Button } from '../Button/Button'
import './Contador.css'

export const Contador = ({ count, setCount }) => {

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
        <Button texto={'-'} operacion handleClick={decrementar} />
        <span>
          {count}
        </span>
        <Button texto={'+'} operacion handleClick={incrementar} />
      </div>
      <div>
        <Button texto={'Reset'} operacion={false}
          handleClick={reset}
          disabled={(count !== 0) ? false : true} />
      </div>
    </div>
  )
}
