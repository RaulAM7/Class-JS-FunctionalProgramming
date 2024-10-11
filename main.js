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


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumaParesImperative(nums))



// Version declarativa

function sumaParesDeclarativa (arr){
    return arr
                .filter(element => element % 2 === 0)
                .reduce((sum, element) => sum+=element, 0)
}

console.log(sumaParesDeclarativa(nums))