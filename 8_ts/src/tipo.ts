
let isActive: boolean;
isActive = true
console.log(typeof isActive)

//numero

let total: number = 150

console.log(total)

//array

let nmbers: number[] = [1,2,3,4];

//interface com objeto
interface User2 {
    name: string, 
    age:number
}
let user2: User2[] = [
    {
        name: "matheus",
        age: 20
    }
]


//objeto
let user: {name: string, age:number}[] = [
    {
        name: "matheus",
        age: 20
    }
]

//tuplas

let rgb: [number, number, number] = [255, 0, 0]

// funçao

function greet(nome: string): string {
    return `ola, ${nome}`;
}

console.log(greet('src'))

//Enum

enum Direction {
    up,
    Down,
    Left,
    Right
}

function getDiretcion(direction: Direction): string {

    switch (direction) {
        case Direction.up:
            return "vai pra cima"
        case Direction.Down:
            return "vai pra baixo"
        case Direction.Left:
            return"vai pra esquerda"
        case Direction.Right:
            return "direita"
        default:
            return "parado"
    }

}

console.log(getDiretcion(Direction.up))
