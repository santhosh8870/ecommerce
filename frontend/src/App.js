import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from "./ProtectedRoute";
import Profile from './pages/Profile';


function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <Router>
        <ToastContainer theme='dark' position='top-right'/>
        <Header
          cartItems={cartItems}
        />
        <Routes>
          {/* Protected Pages */}
          <Route 
            path='/' 
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
          />

          <Route 
            path='/product/:id' 
            element={
              <ProtectedRoute>
                <ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>
              </ProtectedRoute>
            }
          />

          <Route 
            path='/cart' 
            element={
              <ProtectedRoute>
                <Cart cartItems={cartItems} setCartItems={setCartItems}/>
              </ProtectedRoute>
            }
          />

          {/* Public Pages */}
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
