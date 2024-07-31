import { toast } from 'react-toastify';
import { useState } from 'react';

const useCartitems = () => {

    const [cartItems, setCartItems] = useState([])

    const addCart = ( product, quantity) => {

        setCartItems((prevItems) => {

            const itemExists = prevItems.find((item) => item.id === product.id)
      
            if (itemExists) {
      
              toast.info(` quantidade do item ${product.name} Atualizado!`)
              return prevItems.map((item) => item.id === product.id
                ? { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) }
                : item
              )
          
            } else {
              toast.success(`${product.name} Adicionado com Sucesso!`)
              return [...prevItems, { ...product, quantity }]
            }
          })
        }

        const handleUpdateCart = (product, quantity) => {
            toast.info(` quantidade do item ${product.name} Atualizado!`)
            setCartItems((prevItems) => {
              return prevItems.map((item) =>
                item.id === product.id ? { ...item, quantity: +quantity } : item
              )
            })
          }

          const handleRemoveFromCart = (product) => {
            toast.error(`${product.name} foi removido com sucesso!`)
            setCartItems((prevItems) =>
              prevItems.filter((item) => item.id !== product.id
              ))
          }
    

    return {cartItems, setCartItems, addCart, handleUpdateCart, handleRemoveFromCart}

}
export default useCartitems;