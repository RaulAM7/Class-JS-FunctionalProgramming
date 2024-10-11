// IMPERATIVE VS DECLARATIVE programming paradigms
// Imaginemos que queremos la suma de todos los numeros pares hasta cierto tope
// Version Imperativa
function sumaParesImperative (arr) {
    let sum = 0

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    return sum
}
let nums = [...Array(11).keys()];
console.log(sumaParesImperative(nums))

// Version declarativa
function sumaParesDeclarativa (arr){
    return arr
                .filter(element => element % 2 === 0)
                .reduce((sum, element) => sum+=element, 0)
}
console.log(sumaParesDeclarativa(nums))

// WAYS TO ENSURE DATA INMUTABILITY
// Object.assign

const target = { a: 1 }
console.log(target)
const source1 = { b: 2 }
const source2 = { c: 3, d:4 }


Object.assign(target, source1, source2) //SINTAXIS BASICA DEL OBJECT ASSIGN

console.log(target)

const newObject = {}
Object.assign(newObject, target, source1, source2)
console.log(newObject)


// Caso de uso un poco más complicado

const school = {
    name: 'reboot academy',
    location: 'canary islands'
}

// Vamos a construir una funcion que pille un objeto y revuelva una copia con una modificacion en su propiedad Localizacipon

const updateLocation = (sourceObj, newLocation) => {
    const newObject = {}
    Object.assign(newObject, sourceObj, {location: newLocation})
    return newObject
}

const newSchool = updateLocation(school, 'Galdar')

console.log(newSchool)
newSchool.location = 'La isleta'
console.log(newSchool)
console.log(school)



// SPREAD OPERATOR
// Se puede usar el Spread Operator para copiar objects?
// Si que se puede usar preo estan REFERENCIADOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const Object1 = { a: 0, b: 1, c: { tio: 'pepe' } }
const Object2 = { d: 2, e: 4, e: { tia: 'mari' } }

const pruebaSpreadOperator = {...Object1, ...Object2}
console.log(pruebaSpreadOperator)

pruebaSpreadOperator.b = 'Si que está referenciado con el Spread Operator'
console.log(pruebaSpreadOperator)


// JSON.parse(JSON.stringfy(array))

const Object3 = { f: 5, g: 6, h: { prima: 'ana' } }

// Funcion para hacer copias no referenciadas

function copyNonReferencedObject(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const copyObject3 = copyNonReferencedObject(Object3)
console.log(copyObject3)

copyObject3.g = 'No esta referenciado'

console.log(Object3)
console.log(copyObject3)


// USANDO RECURSION PARA HACER DEEP COPIES
//Funcion que tome un array como parametro y cree una copia no referenciada
function clone (arr){
    return arr.map((element) => {
        if (Array.isArray(element)){
            return clone(element)
        } else {
            return element
        }
    }) 
}
const items = ['a','b','c',['d','e','f'],'g','h','i',['j','k','l','m'],'n']
const copyItems = clone(items)
copyItems[0] = 'No está referenciado'
console.log(items)
console.log(copyItems)

// HIGHER ORDER FUNCTIONS
// Ejemplo: una funcion que pilla un array de numeros y toma una funcion dedicada a una operacion concreta a eleccion

const esPar = function(num) {return num % 2 === 0}
const esMultiploCinco = function(num) {return num % 5 === 0}

function arrMathFilter (arr, mathFn) {
    let result = []
    
    arr.forEach((element) => {
        if(mathFn(element)){
            result.push(element)
        }
    })
    return result
}

const arrL = [...Array(100).keys()]
const arrLFiltered = arrMathFilter(arrL, esPar)
console.log(arrLFiltered)


// Fabrica de functions 

function multipleOf(n){
    return function(num){
        return console.log(num % n === 0)
    }
}

const isEven = multipleOf(2)
const isMultipleofCinco = multipleOf(5)

isEven(4)





// Chaining Methods

const students = [
    { name: 'Michael', tutor: true, grades: [10, 8, 7] },
    { name: 'Audrey', tutor: true, grades: [4, 7, 5] },
    { name: 'John', tutor: false, grades: [3.5, 6, 5] },
    { name: 'Scott', tutor: true, grades: [9, 10, 10] },
    { name: 'Mery', tutor: true, grades: [7, 9, 10] },
    { name: 'Kevin', tutor: false, grades: [2, 3, 5] },
]


const sum = (arr) => arr.reduce((accum, element) => accum+element,0)
const getAverageOfaReducedArr = (arr) => sum(arr)/(arr.length)
const hasTutor = (arr) => arr.tutor
const addAverage = (arrObject) => ({...arrObject, average:getAverageOfaReducedArr(arrObject.grades).toFixed(2)})

const getTopNStudents = (arr, topNStudents) => 
    arr
        .filter(hasTutor)
        .map(addAverage)
        .map(element => ({name: element.name, avg:element.average}))
        .sort((a,b) => b.avg-a.avg)
        .slice(0, topNStudents)


console.log(getTopNStudents(students, 4))