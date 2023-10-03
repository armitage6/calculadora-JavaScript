let inpt1 = document.querySelector('#inpt1');
let inpt2 = document.querySelector('#inpt2');

let btnSuma = document.querySelector('#btnSuma');
let btnResta = document.querySelector('#btnResta');
let btnMultiplicar = document.querySelector('#btnMultiplicar');
let btnDividir = document.querySelector('#btnDividir');
let btnPotencia = document.querySelector('#btnPotencia');
let btnRaiz = document.querySelector('#btnRaiz');
let btnAbsoluto = document.querySelector('#btnAbsoluto');
let btnRandom = document.querySelector('#btnRandom');

let resul = document.querySelector('#resul');

let btnRound = document.querySelector('#btnRound');
let btnFloor = document.querySelector('#btnFloor');
let btnCeil = document.querySelector('#btnCeil');


btnSuma.addEventListener('click', () => {
    suma(inpt1.value, inpt2.value)
});

btnResta.addEventListener('click', () => {
    resta(inpt1.value, inpt2.value)
});

btnMultiplicar.addEventListener('click', () => {
    multiplicar(inpt1.value, inpt2.value)
});

btnDividir.addEventListener('click', () => {
    dividir(inpt1.value, inpt2.value)
});

btnPotencia.addEventListener('click', () => {
    potencia(inpt1.value, inpt2.value)
});

btnRaiz.addEventListener('click', () => {
    raiz(inpt1.value, inpt2.value)
});

btnAbsoluto.addEventListener('click', () => {
    absoluto(inpt1.value, inpt2.value)
});

btnRandom.addEventListener('click', () => {
    random(inpt1.value, inpt2.value)
});


btnRound.addEventListener('click', () => {
    round(resul.value)
});
btnFloor.addEventListener('click', () => {
    floor(resul.value)
});
btnCeil.addEventListener('click', () => {
    ceil(resul.value)
});








function suma(n1, n2) {
    let suma = resul.value = parseInt(n1) + parseInt(n2)
    return suma
}
function resta(n1, n2) {
    let resta = resul.value = parseInt(n1) - parseInt(n2)
    return resta
}
function multiplicar(n1, n2) {
    let multiplicar = resul.value = parseInt(n1) * parseInt(n2)
    return multiplicar
}
function dividir(n1, n2) {
    let dividir = resul.value = parseInt(n1) / parseInt(n2)
    return dividir
}
function potencia(n1, n2) {
    let potencia = resul.value = Math.pow(parseInt(n1), parseInt(n2))
    return potencia
}
function raiz(n1, n2) {
    let raiz = resul.value = Math.sqrt(parseInt(n2))
    return raiz
}
function absoluto(n1, n2) {
    let absoluto = resul.value = Math.abs(parseInt(n2))
    return absoluto
}
function random(n1, n2) {
    let random = resul.value = Math.floor(Math.random() * (parseInt(n2) - parseInt(n1)) + parseInt(n1))
    return random
}


function round(n1) {
    let round = resul.value = Math.round(n1)
    return round
}
function floor(n1) {
    let floor = resul.value = Math.floor(n1)
    return floor
}
function ceil(n1) {
    let ceil = resul.value = Math.ceil(n1)
    return ceil
}