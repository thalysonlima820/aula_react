
const NumberList = ({number}) => {
  return (
    <ul>
        {number.map((n, index) => (
            <li key={index}>{n}</li>
        ))}
    </ul>
  )
}

export default NumberList