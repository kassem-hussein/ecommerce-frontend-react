import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Header,Footer} from '../Components/index'
import {Home,Cart, Heart, P404,Product,Shop, About, Contact, Payment, Sign, SignUp, Address, PlaceOrder} from '../pages/index'


const Layout = () => {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/heart' element={<Heart/>}/>
        <Route path='products/:id'element={<Product/>}/>
        <Route path='/shop'element={<Shop/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/payment'element={<Payment/>}/>
        <Route path='/login'element={<Sign/>}/>
        <Route path='/signup'element={<SignUp/>}/>
        <Route path='/address'element={<Address/>}/>
        <Route path='/place-order'element={<PlaceOrder/>}/>
        <Route path='*' element={<P404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Layout
