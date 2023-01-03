// --------------------------NAVEGADOR--------------------------
/* 
Comando que apresentam uma caixa de dialogo
no navegador. Lembre que funcionam no navegador 
e não no terminal
*/
// Apenas um alerta com botão de ok para continuar
window.alert('Olá mundo')

// Mensagem com opção 'ok' ou 'cancelar' 
window.confirm('Suave?')

// Mensagem com caixa de texto para resposta
window.prompt('Digite seu nome: ')


// --------------------------TERMINAl--------------------------

// Retorna a uma mensagem via terminal
// console.log('Olá mundo!') 

/* 
Var -> valor da variável pode ser alterado, mas
ela está em escopo global, ou seja, podendo 
ser acessado fora do escopo onde foi criada.
*/
var nome = 'Leonardo'

/* 
Let -> valor da variável pode ser alterado, mas
ela está NÃO está escopo global, ou seja, NÂO 
pode ser acessada fora do escopo onde foi criada.
*/
let nomedomeio = 'Cruz'

/* 
CONST -> valor da variável NÂO pode ser alterado.
*/
const nomefinal = 'Alves'


// Forma antiga de concatenar strings 
console.log(nome + nomedomeio + nomefinal)
console.log('Seu nome é ' + nome)

/* 
Forma mais usual de concatenação de string e variáveis
Esse padrão é conhecido como TEMPLATE STRING 
*/
console.log(`Seu nome é ${nome} ${nomedomeio} ${nomefinal} `)


// Tipos de dados primitivos, POR VALOR: number, string, boolean

let nome = 'Leonardo';     // String literal.
let idade = 30;            // Number literal (não diferencia inteiro ou float)
let status = true;         // boolean.
let sobrenome = undefined; // tipo sem tipo, pouco usado.
let corEscolhida = null;   // (object) receberá um valor depois q o programa iniciar.










