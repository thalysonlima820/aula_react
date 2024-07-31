

const Filter = () => {

    const numbers :number[] = [1,2,3,4, 6, 8]

    const event = numbers.filter((num) => num % 2 === 0) //par

  return (
    <div>
            {event.map((e) => (
                <>
                {e}
                <br />
                </>
            ))}
  
    </div>
  )
}

export default Filter