// Ejercicio 5
// Escribe una función que tome un número como parámetro y calcule la suma de todos los
// números primos menores o iguales a ese número.


// Los números primos son aquellos números naturales que solamente se pueden dividir por sí mismos y por 1,
//  es decir, que si intentamos dividirlos por cualquier otro número,
//  el resultado no es entero. El número 1 sólo tiene un divisor, que es él mismo, por eso no es considerado como un número primo.

function esPrimo(num) {
    let cond = 0
    for(let i = 1 ; i <= num ; i++){
        if(num % i === 0){
            cond++
        }

    }
    if(cond === 2) {
        return true
    }
    else {
        return false
    }
}

function sumaPrimos(num) {
    let suma = 0
    for(let i = 1; i <= num; i++){
        if(esPrimo(i)){
            suma += i
        }
    }

    return suma

}

console.log(sumaPrimos(5));
