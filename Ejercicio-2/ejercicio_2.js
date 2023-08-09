function ordenarNumeros(array){
    return array.slice().sort((a,b)=>a-b);
}
let numeros = [7, 9, 5, 4, 8];
let numeroOrdenados = ordenarNumeros(numeros);
console.log(numeroOrdenados);
