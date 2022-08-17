import React, { useState } from 'react'
import { Cartel } from '../Cartel/Cartel'
import { Contador } from '../Contador/Contador'
import ContadorClass from '../ContadorClass/ContadorClass'
import './Main.css'

export const Main = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <div className='maqueta'>
                <Cartel count={count}/>
                <ContadorClass count={count} setCount={setCount} />
            </div>
        </div>
    )
}
