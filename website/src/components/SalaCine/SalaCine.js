import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { salas } from '../../shared/salas';
import { ThemeContext } from '../../theme/theme';
import './SalaCine.css'


export const SalaCine = () => {
  // const [theme, setTheme] = useContext(ThemeContext);

  let idPelicula = 1
  let idHorario = 2


  let filas = 5
  let columnas = 10
  let butacas = Array(filas).fill().map(() => Array(columnas).fill())

  const [butacasSeleccionadas, setButacasSeleccionadas] = useState([])
  const [butacasOcupadas, setButacasOcupadas] = useState([])

  const getButaca = (indice1, indice2) => {
    // no seleccionado = 0
    // seleccionado = 1
    // ocupado = 2
    let id = { indice1 } + "" + { indice2 }
    let seleccionados = butacasSeleccionadas.filter((butaca) => butaca == id)
    let ocupados = butacasOcupadas.filter((butaca) => butaca == id)

    if (seleccionados.length > 0) {
      return 1
    } else if (ocupados.length > 0) {
      return 2
    } else {
      return 0
    }
  }

  useEffect(() => {
    let horarioTmp = salas.filter((pelicula) => pelicula.idPelicula === idPelicula)[0]
      .horarios.filter((horario) => horario.idHorario === idHorario)[0]

    if (horarioTmp) {
      setButacasOcupadas(horarioTmp)
    }

    console.log(butacas)

  }, [])

  return (
    <Grid container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
        butacas.map((filas, indice) => {
          return (
            <Grid container flexDirection={"row"} xs={12}
              sx={{
                marginLeft: "20px"
              }}>
              {
                filas.map((celda, indice2) => {
                  return <Grid item>
                    {
                      getButaca(indice, indice2) === 0 ?
                        <div className='butaca'>
                          {indice} ,  {indice2}
                        </div>
                        :
                        getButaca(indice, indice2) === 1 ?
                          <div className='butacaSelect'>
                            {indice} ,  {indice2}
                          </div>
                          :
                          <div className='butacaBlock'>
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
    </Grid>
  )
}
