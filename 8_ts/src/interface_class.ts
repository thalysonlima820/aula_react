// tabelas => entidade: usuario -> nome, email, senha

interface User {
    id: number;
    name: string;
    isActive: boolean;
}

let usuario: User[] = [
    {
        id: 1,
        name: "thalyson",
        isActive: true
    }
]

//class

class Person implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id:number, name: string, isActive: boolean) {
        this.id = id;
        this.name = name
        this.isActive = isActive
    }

    falar(isNew: boolean) {
        console.log(`oi eu sou a ${this.name}`)
        if(isNew) {
            console.log("e sou novo aqui")
        }
    }
}

const PersonData = new Person(2, "nivia", true)
console.log(PersonData)

PersonData.falar(false)