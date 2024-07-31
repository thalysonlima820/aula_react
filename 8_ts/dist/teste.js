var Movimento;
(function (Movimento) {
    Movimento[Movimento["up"] = 0] = "up";
    Movimento[Movimento["dow"] = 1] = "dow";
    Movimento[Movimento["left"] = 2] = "left";
    Movimento[Movimento["rith"] = 3] = "rith";
})(Movimento || (Movimento = {}));
function boneco1(movimento) {
    switch (movimento) {
        case Movimento.up:
            return "foi pra cima";
    }
}
console.log(boneco1(Movimento.up));
let nomes = {
    name: "dsfs",
    age: 58
};
console.log(typeof nomes);
class Pessoas {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let P = new Pessoas("tha", 22);
console.log(P);
