let btn = document.querySelector('.boton')

function obtenerColorrRandom() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', () => {
    let randomColor = obtenerColorrRandom()
    btn.style.backgroundColor = randomColor
})



