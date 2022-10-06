import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { salas } from '../../shared/salas';
import './SalaCine.css'


export const SalaCine = () => {

  let idPelicula = 1
  let idHorario = 1


  let filas = 5
  let columnas = 10
  let butacas = Array(filas).fill().map(() => Array(columnas).fill())

  const [butacasSeleccionadas, setButacasSeleccionadas] = useState([])
  const [butacasOcupadas, setButacasOcupadas] = useState([])

  const getButaca = (indice1, indice2) => {
    // no seleccionado = 0
    // seleccionado = 1
    // ocupado = 2
    let id = `${indice1}${indice2}`
    let seleccionados = butacasSeleccionadas.filter((butaca) => butaca === id)
    let ocupados = butacasOcupadas.filter((butaca) => butaca === id)

    if (seleccionados.length > 0) {
      return 1
    } else if (ocupados.length > 0) {
      return 2
    } else {
      return 0
    }
  }

  const seleccionar = (indice1, indice2) => {
    let id = `${indice1}${indice2}`
    let isSelected = butacasSeleccionadas.filter((butaca) => butaca === id)[0]

    if (isSelected) {
      setButacasSeleccionadas(butacasSeleccionadas.filter((butaca) => butaca !== id))
    } else {
      setButacasSeleccionadas([...butacasSeleccionadas, id])
    }
  }

  const reservar = () => {
    setButacasOcupadas([...butacasOcupadas, ...butacasSeleccionadas])
    setButacasSeleccionadas([])
    alert("Reserva exitosa")
  }

  useEffect(() => {
    let horarioTmp = salas.filter((pelicula) => pelicula.idPelicula === idPelicula)[0]
      .horarios.filter((horario) => horario.idHorario === idHorario)[0]

    if (horarioTmp) {
      setButacasOcupadas(horarioTmp.asientosOcupados)
    }
  }, [])

  return (
    <Grid container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      alignItems="center"
      justifyContent="center"
      marginTop={'15px'}>
      {
        butacas.map((filas, indice) => {
          return (
            <Grid key={indice} container flexDirection={"row"}
              alignItems="center"
              justifyContent="center">
              {
                filas.map((celda, indice2) => {
                  return <Grid key={indice2} item >
                    {
                      getButaca(indice, indice2) === 0 ?
                        <div className='butaca libre' onClick={() => seleccionar(indice, indice2)}>
                          {indice} ,  {indice2}
                        </div>
                        :
                        getButaca(indice, indice2) === 1 ?
                          <div className='butaca seleccionado' onClick={() => seleccionar(indice, indice2)}>
                            {indice} ,  {indice2}
                          </div>
                          :
                          <div className='butaca bloqueado'>
                            {indice} ,  {indice2}
                          </div>
                    }
                  </Grid>
                })
              }
            </Grid>
          )
        })
      }
      <Button variant="contained" onClick={() => reservar()}
      sx={
        {marginTop: '20px'}
      }>Reservar</Button>
    </Grid>
  )
}
