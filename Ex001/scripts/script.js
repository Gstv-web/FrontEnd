let nome = document.querySelector('#nome');
nome.style.width = '100%';

let email = document.querySelector('#email');
email.style.width = '100%'


let counter = document.querySelector('#counter');
counter.innerHTML = `Caracteres: ${'0'}`;

function count() {
    let num = document.querySelector('textarea');
    counter.innerHTML = `Caracteres: ${num.value.length}`;
}



function clickBtn() {
    let botao = document.querySelector('button')

    if (botao.onclick) {
        botao.style.background = 'white';
    }
}