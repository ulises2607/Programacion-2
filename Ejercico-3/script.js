let lista = document.querySelector('.list')
let boton = document.querySelector('.btn')

let vector = [1,2,3,4,5,6,7,8,9,10]


// Funciones
function filtrarPares(arr) {
    let resultado = arr.filter((element) => element % 2 === 0);
    return resultado
}

function agregarLista(arrFiltrado){
    arrFiltrado.forEach(element => {
        lista.innerHTML += `<li>${element}</li>`

    })
}



let pares = filtrarPares(vector)

boton.addEventListener('click', agregarLista(pares))


