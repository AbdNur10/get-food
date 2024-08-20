import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Checkout from '../pages/Checkout'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/food' element={<AllFoods/>}/>
        <Route path='/food/:id' element={<FoodDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Routers