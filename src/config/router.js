import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/homeScreen'
import MyNavbar from '../components/navbar'
import NotFound from '../screens/notfoundScreen'
import ContactScreen from '../screens/contactScreen'
import AboutUsScreen from '../screens/aboutScreen'

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <MyNavbar />
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/home' element={<HomeScreen />} />
                <Route path='/contact' element={<ContactScreen />} />u
                <Route path='/about' element={<AboutUsScreen />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
