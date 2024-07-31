import Carttem from "./Carttem"
import CheckoutButton from "./CheckoutButton"


const Cart = ({cartItems, onUpdatecart, handleRemoveFromCart, setCartItems}) => {

  const totalprice = cartItems.reduce((total, item) => 
    total + item.price * item.quantity, 0
)

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <>
        <p>Não há ítens no carrinho</p>
        </>
      ) :(
        <>
          {cartItems.map((item) => (
            <Carttem key={item.id} item={item} onUpdatecart={onUpdatecart} handleRemoveFromCart={handleRemoveFromCart}/>
          ))}
          <div className="total">
            <p>Total: ${totalprice.toFixed(2)}</p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </>
      )}
    </div>
  )
}

export default Cart