import { useState } from 'react'

const Product = ({ product, onAddToCart}) => {

    const [quantity, setQuantity] = useState(1)

  return (
    <div className='product'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <div className="cart-buttons">
        <select onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {Array.from({length: 10}, (_, i) => (
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default Product