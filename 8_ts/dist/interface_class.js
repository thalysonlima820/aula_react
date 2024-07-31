// tabelas => entidade: usuario -> nome, email, senha
let usuario = [
    {
        id: 1,
        name: "thalyson",
        isActive: true
    }
];
//class
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    falar(isNew) {
        console.log(`oi eu sou a ${this.name}`);
        if (isNew) {
            console.log("e sou novo aqui");
        }
    }
}
const PersonData = new Person(2, "nivia", true);
console.log(PersonData);
PersonData.falar(false);
