// Crear un documento HTML con un formulario que contenga los campos Nombre y Email, se
// pide recuperar los valores ingresados y mostrarlos por consola.

let nombre = document.querySelector('#name')
let mail = document.querySelector('#mail')

let elements = document.querySelector('.formulario')

elements.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(nombre.value);
    console.log(mail.value)
})