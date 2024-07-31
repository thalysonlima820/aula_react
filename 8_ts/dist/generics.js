function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['tha', 'niv']);
console.log(numberArray);
console.log(stringArray);
///////////////////////////opçao 2/////////////////////////////////
function chamar(num) {
    return new Array().concat(num);
}
let sa = chamar([1, 2, 3,]);
console.log(typeof sa);
///////////////////////restringir tipos////////////////////////////////
function merge(objt1, objt2) {
    return Object.assign(Object.assign({}, objt1), objt2);
}
const result = merge({ name: 'tha', age: 22 }, { job: 'programador', isactive: true });
console.log(result);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const MeuTodo = {
    title: "teste",
    description: 'testeee',
    completed: false
};
const todoAtualizado = updateTodo(MeuTodo, { completed: true });
console.log(todoAtualizado);
////////////somente leitura//////////////////////
const meusegundoTodo = {
    title: "teste",
    description: 'testeee',
    completed: false
};
//meusegundoTodo.title = 'ds'
