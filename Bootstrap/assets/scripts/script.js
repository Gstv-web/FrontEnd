let nome = document.querySelector("#nome");
let email = document.querySelector("#email")
let assunto = document.querySelector("#textarea")
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let counter = document.querySelector("#counter")
counter.innerHTML = "0 / 500"

function validaNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length >= 2) {
        txtNome.style.color = "$26733a";
        txtNome.innerHTML = "✔";
        nomeOk = true;
    } else {
        txtNome.style.color ="#732626";
        txtNome.style.fontSize = "13px";
        txtNome.innerHTML = "❌ Nome inválido - Insira pelo menos 3 caracteres";

    }
}


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        txtEmail.style.color = "#26733a";
        txtEmail.innerHTML = "✔";
        emailOk = true;
    } else {
        txtEmail.style.fontSize = "13px";
        txtEmail.innerHTML = "❌ Digite um email válido!";
    }
}


function validaAssunto() {
    counter.innerHTML = `${assunto.value.length} / 500`;

    if (assunto.value.length > 500) {
        counter.innerHTML = `${assunto.value.length} / 500 - ❌ Você ultrapassou o limite de caracteres.`;
    } else if (assunto.value.length < 20) {
        counter.innerHTML = `${assunto.value.length} / 500 - ❌ Digite pelo menos 20 caracteres.`;
    } else {
        counter.innerHTML = `${assunto.value.length} / 500`;
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente e tente novamente.")
    }
}