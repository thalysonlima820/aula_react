import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const CheckoutButton = ({ cartItems, setCartItems }) => {

  const navigate = useNavigate()

  const handleCheckout = () => {

    if (cartItems.length > 0) {
      toast.success("Compra finalizada com sucesso!")
      navigate("/thank-you", { state: { cartItems } })
      setCartItems([]);
    } else {
      toast.error("Seu carrinho estar vazio")
    }
  }

  return (
    <button onClick={handleCheckout}>Finalizar compra</button>
  )
}

export default CheckoutButton