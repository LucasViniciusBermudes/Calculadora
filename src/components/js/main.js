const BtnMudaTema = document.querySelector('.muda-tema');
const calculador = document.querySelector('.calculador');
const mudaIcone = document.querySelector('.toggler-icon');
const texto = document.querySelector('.texto');
let eDark = true;
BtnMudaTema.onclick = () => {
    texto.classList.toggle('dark');
    calculador.classList.toggle('dark');
    BtnMudaTema.classList.toggle('ativo');
    eDark = !eDark;
}

const display = document.querySelector('#display');

function insert(num) {
    let numero = document.getElementById('display').innerText;
    document.getElementById('display').innerText = numero + num;
}

function clean() {
    document.getElementById('display').innerText = " ";
}

function back() {
    let resultado = document.getElementById('display').innerText;
    document.getElementById('display').innerText = resultado.substring(0, resultado.length-1);
}

function calcula() {
    let resultado = document.getElementById('display').innerText;
    if (resultado) {
        document.getElementById('display').innerHTML = eval(resultado);
    }
}