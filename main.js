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

console.log(numbers)

