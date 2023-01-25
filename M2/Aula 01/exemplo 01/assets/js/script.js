const nome = document.getElementById('nome') 
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaconf = document.getElementById('senhaconf') 
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i


function verificarNome() {

    const nomeValue = nome.value.trim()

    if (nomeValue === '') {
        mensagemErro(nome, 'Campo vazio...')
    }
    else if (nomeValue.length <= 3) {
       mensagemErro(nome, 'Tamanho mínimo 3 letras')
    }

    else {
        mensagemAcerto(nome, 'Tudo ok...')
        return true
    }
}

function verificarEmail() {

    const emailValue = email.value.trim()

    if (regexEmail.test(emailValue)) {
        mensagemAcerto(email, 'Email válido...')
        return true
    }
    else {
        mensagemErro(email, 'Ops, email inválido.')
    }
}

function verificarSenha() {
    
    const senhaValor = senha.value
    
    if (senhaValor.length < 8) {
        mensagemErro(senha, 'Tamanho mínimo de 8 caracteres')
    }
    else {
        mensagemAcerto(senha, 'Ok, senha aceita!')
        return true
    }
}

function confirmarSenha() {
    
    const senhaconfValue = senhaconf.value
    const senhaValor = senha.value

    if (senhaValor === senhaconfValue) {
        mensagemAcerto(senhaconf, 'Ok, as senha são iguais!')
        return true
    }
    else {
        mensagemErro(senhaconf, 'Ops, senhas não conferem!')
    }
}


function enviarForm() {

    if (verificarNome() && verificarEmail() && verificarSenha() && confirmarSenha()) {
        alert('Formulário enviado!')
    }
    else {
        alert('Ops, um ou mais campos não foram preenchidos corretamente.')
    }
}


function mensagemErro(entrada, msg) {

    const controle = entrada.parentElement
    controle.className = 'caixadetextoErro'

    const texto = controle.querySelector('span')
    texto.innerHTML = msg
}

function mensagemAcerto(entrada, msg) {

    const controle = entrada.parentElement
    controle.className = 'caixadetextoAcerto'

    const texto = controle.querySelector('span')
    texto.innerHTML = msg
}

