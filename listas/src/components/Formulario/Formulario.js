import { MenuItem, TextField } from '@mui/material'
import React from 'react'

export const Formulario = ({ ecosistemas }) => {

    const handleChange = () => {
        console.log('change')
    }

    return (
        <div style={{ marginTop: '3rem' }}>
            <TextField
                id="select-ecosistema"
                select
                label="Select"
                value={ecosistemas[0].id}
                onChange={handleChange}
                helperText="Seleccionar ecosistema"
                variant="filled"
            >
                {ecosistemas.map((ecosistema) => (
                    <MenuItem key={ecosistema.id} value={ecosistema.id}>
                        {ecosistema.nombre}
                    </MenuItem>
                ))}
            </TextField>
            <hr></hr>
            <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder='Nombre'
            />
            <TextField
                required
                id="outlined-disabled"
                label="Required"
                placeholder='Tipo'
            />
            </div>

        </div>

    )
}
