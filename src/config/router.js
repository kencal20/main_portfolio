import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/homeScreen'
import MyNavbar from '../components/navbar'
import NotFound from '../screens/notfoundScreen'

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <MyNavbar />
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/home' element={<HomeScreen />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
