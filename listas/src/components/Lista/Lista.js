import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './Contenido/Contenido';

export function Lista({ ecosistemas }) {

  useEffect(() => {
    console.log("Componente Listas")
  }, [])

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#8bc34a" }}>
      <Table aria-label="collapsible table" sx={{ color: "white" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell> Ecosistemas </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ecosistemas.map((ecosistema) => (
            <Row key={ecosistema.id} ecosistema={ecosistema} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}