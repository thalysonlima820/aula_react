

const Carttem = ({item, onUpdatecart, handleRemoveFromCart}) => {
  return (
    <div className='cart-item'>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>total: {item.price * item.quantity}</p>
        <div className="cart-buttons">
            <input type="text" 
            onChange={(e) => onUpdatecart(item, parseInt(e.target.value))}
            value={item.quantity} />
            <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
        </div>
    </div>
  )
}

export default Carttem