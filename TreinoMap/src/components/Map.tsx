

const Map = () => {

    const numbers: number[] = [1,2,3,4,5]


  return (
    <div>
        {numbers.map((n) => (
            <>
            {n * 2}
            <br />
            </>
        ))}
    </div>
  )
}

export default Map