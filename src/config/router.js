import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNavbar from '../components/navbar'
import FooterComponent from '../components/footer'
import { routeData } from './routeData'

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <MyNavbar />
            <Routes>
                {routeData.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    )
}
