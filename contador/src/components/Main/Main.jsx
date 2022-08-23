import React, { useEffect, useState } from 'react'
import { Cartel } from '../Cartel/Cartel'
import { Contador } from '../Contador/Contador'
import ContadorClass from '../ContadorClass/ContadorClass'
import './Main.css'

export const Main = () => {

    let initialState = (JSON.parse(localStorage.getItem('count'))).count
    const [count, setCount] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify({ count: count }))
    }, [])


    return (
        <div className='container'>
            <div className='maqueta'>
                <Cartel count={count} />
                <Contador count={count} setCount={setCount} />
            </div>
        </div>
    )
}
