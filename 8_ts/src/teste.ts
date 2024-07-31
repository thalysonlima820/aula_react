enum Movimento {
    up,
    dow,
    left,
    rith
}

function boneco1(movimento: Movimento): string {
    
    switch(movimento){
        case Movimento.up:
            return "foi pra cima"
    }
}

console.log(boneco1(Movimento.up))

interface Us {
    name: string,
    age: number
}

let nomes: Us = {
    name: "dsfs",
    age: 58
}

console.log(typeof nomes)

class Pessoas implements Us {
    name: string
    age: number

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

let P = new Pessoas("tha", 22)

console.log(P)