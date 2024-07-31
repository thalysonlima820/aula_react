import { useLocation, useNavigate } from "react-router-dom"

const ThankYouPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const items = location.state.cartItems;

  const totalprice = items.reduce((total, item) => 
    total + item.price * item.quantity, 0
  )

  return (
    <div className="thank-you-page">
      ok
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.quantity} X {item.price}</li>
        ))}
      </ul>
      <p>Total: ${totalprice.toFixed(2)}</p>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}

export default ThankYouPage