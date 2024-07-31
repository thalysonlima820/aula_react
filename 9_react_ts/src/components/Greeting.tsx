type GreetingProps = {
    name: string,
    experience: number
}

const Greeting = ({ name, experience }: GreetingProps) => {
    return (
        <div>
           <h1> Óla {name}, Bem Vindo ao React!</h1>
           <p>Você tem {experience} ano</p>
        </div>
    )
}

export default Greeting