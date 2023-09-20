import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import AddCar from '../Components/AddCar'
import CarDisplay from '../Components/CarDisplay'
import CarDetails from '../Components/CarDetails'
import Privateroutes from './Privateroutes'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addcar' element={<Privateroutes><AddCar/></Privateroutes>}/>
        <Route path='/cardisplay' element={<CarDisplay/>}/>
        <Route path='/cardetails' element={<Privateroutes><CarDetails/></Privateroutes>}/>
    </Routes>
  )
}

export default AllRoutes