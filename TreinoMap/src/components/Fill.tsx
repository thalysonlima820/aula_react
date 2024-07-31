

const Fill = () => {

    const numbers : number[] = [1,2,3,4,5,6]
    numbers.fill(1,2,4)

  return (
    <div>
        {numbers.map((n) => (
            <>
            {n} <br />
            </>
        ))}
    </div>
  )
}

export default Fill