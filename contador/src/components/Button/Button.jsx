import React from 'react'

export const Button = ({ texto, operacion = true, handleClick, disabled = false }) => {
    return (
        <>
            {
                operacion ?
                    <button className='operacion-btn' onClick={handleClick}>
                        {texto}
                    </button>
                    :
                    <button className='reset-btn' onClick={handleClick} disabled={disabled}>
                        {texto}
                    </button>
            }
        </>
    )
}
