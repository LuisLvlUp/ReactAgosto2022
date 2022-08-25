import { Button, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export const Formulario = ({ ecosistemas, setEcosistemas }) => {

    const initState = {
        ecosistema: 0,
        animal: {
            nombre: '',
            tipo: ''
        }
    }


    const [animalTmp, setAnimalTmp] = useState(initState)
    const nombre = useRef()
    const tipo = useRef()

    useEffect(() => {
        if(animalTmp.ecosistema !== 0 && animalTmp.animal.nombre !== '' 
        && animalTmp.animal.tipo !== ''){

            let ecosistemaTmp = ecosistemas.map( (eco) => {
                if(eco.id == animalTmp.ecosistema){
                    return { ...eco,  animales: [...eco.animales, {
                        id: eco.animales.length + 1,
                        nombre: animalTmp.animal.nombre,
                        tipo: animalTmp.animal.tipo
                    }]}
                }else{
                    return eco
                }
            } )
            nombre.current.value = ''
            tipo.current.value = ''
            setEcosistemas(ecosistemaTmp)
            setAnimalTmp(initState)
        }
    }, [animalTmp])
      

    const handleChange = (event) => {
        setAnimalTmp({...animalTmp, ecosistema: event.target.value}  )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let nombreTmp = event.target.elements.nombre.value
        let tipoTmp = event.target.elements.tipo.value
        setAnimalTmp({...animalTmp, animal: { nombre: nombreTmp, tipo: tipoTmp }})
    }


    return (
        <form style={{ marginTop: '3rem' }} onSubmit={handleSubmit}>
            <TextField
                select
                label="Select"
                value={animalTmp.ecosistema}
                onChange={handleChange}
                helperText="Seleccionar ecosistema"
                variant="filled"
                sx={{ margin: '10px' }}
            >
                <MenuItem value={0}>
                    ...
                </MenuItem>
                {ecosistemas.map((ecosistema) => (
                    <MenuItem key={ecosistema.id} value={ecosistema.id}>
                        {ecosistema.nombre}
                    </MenuItem>
                ))}
            </TextField>
            <div>
                <TextField
                    name="nombre"
                    placeholder='Nombre'
                    sx={{ margin: '10px' }}
                    ref={nombre}
                />
                <TextField
                    name="tipo"
                    placeholder='Tipo'
                    sx={{ margin: '10px' }}
                    ref={tipo}
                />
            </div>
            <Button sx={{ margin: '10px' }} variant="contained" color="success" type='submit'>Submit</Button>
        </form>

    )
}
