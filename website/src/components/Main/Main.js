import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Contacto } from '../Contacto/Contacto'
import { Home } from '../Home/Home'
import Navigation from '../Navigation/Navigation'
import { Productos } from '../Productos/Productos'

export const Main = () => {
    return (
        <Routes>
            <Route path="/home" element={<Navigation> <Home /></Navigation>} />
            <Route path="/productos" element={<Navigation> <Productos /></Navigation>} />
            <Route path="/contacto" element={<Navigation> <Contacto /></Navigation>} />
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    )
}
