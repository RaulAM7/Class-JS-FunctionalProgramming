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


// 