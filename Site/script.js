const display = document.querySelector('#display');
const botoes = document.querySelectorAll('button');
const operadores = document.querySelector('button#operador-btn');

botoes.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'limpa') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'igual') {
            display.innerText = eval(display.innerText);   
        } else if (display.innerText != '' && item.id == 'igual') {
            display.innerText = 'Vazio!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const BtnMudaTema = document.querySelector('.muda-tema');
const calculador = document.querySelector('.calculador');
const mudaIcone = document.querySelector('.toggler-icon');
let eDark = true;
BtnMudaTema.onclick = () => {
    calculador.classList.toggle('dark');
    BtnMudaTema.classList.toggle('ativo');
    eDark = !eDark;
}

