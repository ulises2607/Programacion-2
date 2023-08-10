
let boton = document.querySelector('.btnMostrarOcultar');
let miDiv = document.querySelector('.Div');

boton.addEventListener('click', function() {
    if (miDiv.style.display === 'none') {
        miDiv.style.display = 'block';
    } else {
        miDiv.style.display = 'none';
    }
});
