import React, { useEffect, useState } from 'react'
import { Lista } from '../Lista/Lista'
import Container from '@mui/material/Container';
import { ecosistemas as contenido } from '../../shared/animales';
import { Formulario } from '../Formulario/Formulario';

export const Main = () => {

    const [ecosistemas, setEcosistemas] = useState(contenido)
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Componente Main")
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return setData(json)
            })
    }, [])


    return (
        <Container sx={{ paddingTop: '3rem' }} maxWidth="sm">
            <Lista ecosistemas={ecosistemas} />
            <Formulario ecosistemas={ecosistemas} setEcosistemas={setEcosistemas} />
        </Container>
    )
}
