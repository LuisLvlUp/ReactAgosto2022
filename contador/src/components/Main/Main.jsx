import React, { useEffect, useReducer, useState } from 'react'
import { reducer } from '../../reducers/contador'
import { Cartel } from '../Cartel/Cartel'
import { Contador } from '../Contador/Contador'
import ContadorClass from '../ContadorClass/ContadorClass'
import './Main.css'

export const Main = () => {

    let initialState = 0
    // const [count, setCount] = useState(initialState)
    const [count, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // localStorage.setItem('count', JSON.stringify({ count: count }))
    }, [])


    return (
        <div className='container'>
            <div className='maqueta'>
                <Cartel count={count} />
                <Contador count={count} dispatch={dispatch} />
            </div>
        </div>
    )
}
