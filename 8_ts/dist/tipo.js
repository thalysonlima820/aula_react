let isActive;
isActive = true;
console.log(typeof isActive);
//numero
let total = 150;
console.log(total);
//array
let nmbers = [1, 2, 3, 4];
let user2 = [
    {
        name: "matheus",
        age: 20
    }
];
//objeto
let user = [
    {
        name: "matheus",
        age: 20
    }
];
//tuplas
let rgb = [255, 0, 0];
// funçao
function greet(nome) {
    return `ola, ${nome}`;
}
console.log(greet('src'));
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDiretcion(direction) {
    switch (direction) {
        case Direction.up:
            return "vai pra cima";
        case Direction.Down:
            return "vai pra baixo";
        case Direction.Left:
            return "vai pra esquerda";
        case Direction.Right:
            return "direita";
        default:
            return "parado";
    }
}
console.log(getDiretcion(Direction.up));
