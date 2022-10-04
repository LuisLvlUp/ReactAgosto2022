import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Contacto } from '../Contacto/Contacto'
import Navigation from '../Navigation/Navigation'
import { Productos } from '../Productos/Productos'
import { SalaCine } from '../SalaCine/SalaCine'

export const Main = () => {
    return (
        <Routes>
            <Route path="/home" element={<Navigation> <SalaCine /></Navigation>} />
            <Route path="/productos" element={<Navigation> <Productos /></Navigation>} />
            <Route path="/contacto" element={<Navigation> <Contacto /></Navigation>} />
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    )
}
