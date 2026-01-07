import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ProductedRoute from './ProductedRoute';

function App(){

  const [cartItems, setCartItems] = useState([])
  

  return(
    <BrowserRouter>
      <div>

        <Header cartItems={cartItems}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={
              <ProductedRoute>
                <ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>
              </ProductedRoute>
              }
              />
            <Route path='/cart' element={
              <ProductedRoute>
                <Cart cartItems={cartItems} setCartItems={setCartItems}/>
              </ProductedRoute>
              }/>
            <Route path='/profile' element={
              <ProductedRoute>
                <Profile/>
              </ProductedRoute>
              }/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route/>
          </Routes>
        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App;