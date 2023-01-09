/* 
Funções são o corações de quaisquer linguagem
de progamação. Além de deixar o código mais 
limpo e inteligente, elas também podem ser 
reutilizadas.

Sintaxe: function nomeDaFuncao(Com ou sem parâmetro) {
    Corpo da função, podendo ser com ou sem retorno
}
*/

/* 
Função sem retorno e sem parâmetro que executa a 
função de escrever oi no console.assert */
function escrevaOI() {
    console.log('oi');
}
// Para ser executada, a função precisa ser chamada.
escrevaOI()


/*
Função sem parâmetro que retorna a variável result */
function salarioDobrado() {
    let sal = 1000
    var result = sal * 2
    return result
}

/*
Neste caso, para apresentar o resultado desta função,
ela deve ser chamada dentro de um console.log.
Lembrando que a função deve ser chamada, não a variavél
que ela retorna */
console.log(`Resultado: ${salarioDobrado()}`);


/* 
Função que retorna o quadrado do número recebido
como parâmetro.*/
function Quadrado(numero) {
    return numero ** 2
}

/* 
Note que ao chamar a função, é necessário informar um valor 
como argumento, já que ela necessita deste parâmetro para
funcionar. */
console.log(Quadrado(10));
