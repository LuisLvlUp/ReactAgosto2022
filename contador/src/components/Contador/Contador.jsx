import React, { useEffect, useRef, useState } from 'react'
import { getColor } from '../../shared/getColor'
import { Button } from '../Button/Button'
import './Contador.css'

export const Contador = ({ count, dispatch }) => {

  const textoContador = useRef()

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    let color = getColor(count)
    textoContador.current.style = `color: ${color}`
    localStorage.setItem('count', JSON.stringify({count: count}))
  }, [count])


  const incrementar = () => {
    // setCount(count + 1)
    dispatch({ type: 'increment' })
  }

  const decrementar = () => {
    // setCount(count - 1)
    dispatch({ type: 'decrement' })
  }

  const reset = () => {
    // setCount(0)
    dispatch({ type: 'reset', reset: 20 })
  }

  return (
    <div className='contador-container'>
      <div>
        <Button texto={'-'} operacion handleClick={decrementar} />
        <span ref={textoContador}>
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
