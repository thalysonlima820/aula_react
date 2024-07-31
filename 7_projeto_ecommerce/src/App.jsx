import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

//components
import Catalogo from './components/Catalogo'
import Cart from './components/Cart'
import ThankYouPage from './components/ThankYouPage'

import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/ReactToastify.css";

// cuaston hooks
import useCartitems from './hooks/useCartitems'

function App() {

  
  const { 
    cartItems, 
    setCartItems, 
    addCart, 
    handleUpdateCart, 
    handleRemoveFromCart
  } = useCartitems()

  const handleAddCart = (product, quantity) => {
    addCart(product,quantity)
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catalago</Link>
        <Link to="/Cart">Carrinho</Link>
      </nav>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Catalogo 
            onAddToCart={handleAddCart} 
          />} />
          <Route path='/Cart' element={<Cart
            cartItems={cartItems}
            onUpdatecart={handleUpdateCart}
            handleRemoveFromCart={handleRemoveFromCart}
            setCartItems={setCartItems}
            
          />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
        </Routes>
      </div>

      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

    </BrowserRouter>
  )
}

export default App
