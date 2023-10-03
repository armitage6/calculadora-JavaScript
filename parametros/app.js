let num1 = document.querySelector('#primerNumero');
let num2 = document.querySelector('#segundoNumero');
let btn = document.querySelector('#btnCalcular');
let textoResultado = document.querySelector('#textoResultado');



btn.addEventListener('click', () => {
    valorNum()
})


function sumar(n1, n2) {
    let resultado = parseInt(n1) + parseInt(n2);
    return resultado
}

function valorNum() {
    let result = sumar(num1.value, num2.value);
    textoResultado.textContent = result
}





