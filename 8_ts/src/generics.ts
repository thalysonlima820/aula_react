
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let numberArray = getArray([1, 2, 3, 4])
let stringArray = getArray(['tha', 'niv'])

console.log(numberArray)
console.log(stringArray)

///////////////////////////opçao 2/////////////////////////////////

function chamar(num: any): any[] {
    return new Array<any>().concat(num)
}

let sa = chamar([1, 2, 3,])
console.log(typeof sa)

///////////////////////restringir tipos////////////////////////////////

function merge<T extends object, U extends object>(objt1: T, objt2: U) {
    return { ...objt1, ...objt2 }
}

const result = merge({ name: 'tha', age: 22 }, { job: 'programador', isactive: true })

console.log(result)

//////////////////////////////ultilitarios/////////////////////////

type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const MeuTodo: Todo = {
    title: "teste",
    description: 'testeee',
    completed: false
}

const todoAtualizado = updateTodo(MeuTodo, { completed: true })

console.log(todoAtualizado)

////////////somente leitura//////////////////////

const meusegundoTodo: Readonly<Todo> = {
    title: "teste",
    description: 'testeee',
    completed: false
}

//meusegundoTodo.title = 'ds'