let btn = document.querySelector('#btn');
let result = document.querySelector('#result');


btn.addEventListener('click', () => {
    crearAleatorio(10, 15)
})


function crearAleatorio(min, max) {
    maximo = max + 1;
    let resultado = Math.floor(Math.random() * (max - min) + min);


    result.textContent = resultado
}