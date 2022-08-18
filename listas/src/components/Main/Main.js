import React, { useState } from 'react'
import { Lista } from '../Lista/Lista'
import Container from '@mui/material/Container';
import { ecosistemas as contenido } from '../../shared/animales';

export const Main = () => {

    const [ecosistemas, setEcosistemas] = useState(contenido)

    return (
        <Container sx={{paddingTop: '3rem'}} maxWidth="sm">
            <Lista ecosistemas={ecosistemas} />
        </Container>
    )
}
