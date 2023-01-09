/*
Note que, neste ponto estamos acessando nosso documento por inteiro
e não um local específico, é como se estivessemos atribuindo algo à
tag body diretamente.

Importante saber que a instrução 'window' pode ser suprimida
*/

window.document.write('Testando como escrever algo na tela usando js')

// Note que também podemos escrever o resultado direto de uma equação
document.write(300 / 15 + 199)

// Note que tags HTML funcionam também.
document.write('<h1> Leonardo Alves</h1>')

// Note que também podemos usar template string quando necessário
let nome = 'Ebony'
document.write(`legal te conhecer, ${nome}!`)

// ------------------------------------------------------------------

/* 
Agora vamos utilizar o prompt para pegar alguns dados inseridos
pelo navegador e apresentá-los no corpo do nosso documento. 
Lembre que, o prompt sempre retorna um elemento do tipo String 
*/

let nomeCompleto = prompt('Nome completo: ')
let email = prompt('Email: ')
let telefone = prompt('Telefone: ')

document.write(`
<p>
Nome: <strong> ${nomeCompleto} </strong>
<br>Email: ${email}
<br>Telefone: ${telefone} 
</p>
`)







