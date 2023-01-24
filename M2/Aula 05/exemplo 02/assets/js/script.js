/*
Try - tentar, a ideia é que o programa tente executar um trecho de
código ou função. Caso um erro ocorra, podemos tratá-lo com catch.

Catch - tratar o erro, a ideia é que caso um erro ocorra durante a 
execução do código, ele possa ser tratado neste bloco, podendo ser
gerado um log que mostra o erro, utilizando dos erros internos já 
pré-configurados, mas também podemos crianos nossos próprios erros
garantindo uma linguagem mais amigável e validações específicas que
nossa aplicação pode exigir. 
Para este fim, usamos a instrução trhow.

Trhow - erro gerado propositalmente, a ideia é que se necessário,
ações podem ser permitas enquanto e logs gerados de acordo com elas.
Também podemos usá-lo para validar de forma mais específica situações
inusitadas da nossa aplicação, tendo maior controle sobre tudo que acontece.

Finally - o final do processamento, a ideia é que independente de
ter dado algum erro ou não, algo será executado ao fim do processamento.
O finally vai permitir que isso ocorra, mas não é obrigatória a sua
implementação.
*/

/* 
Teste simples, note que console está escrito errado,
desta forma um erro ou exception será gerado e o bloco 
cath será executado.
*/
// try {
//     consol.log('Testando')
// }
// catch (e) {
//     document.write(e.message)
//     console.log(e.message);
// }

/*
Neste cenário, o usuário não pode, dentro das regras do negócio
ultrapassar o total de 100 pontos, uma vez ocorrido, algo errado
está acontecendo no sistema.
*/

// pontuação informada pelo usuário ou gerada pela sistema
var pontos = 150

// tentando fazer as verificações de status do usuário de acordo com sua pontuação
try {
    if(pontos >= 0 && pontos < 50) {
        console.log('Normal');
    }

    // Note que 100 é o limite
    else if (pontos <= 100) {
        console.log('Premium');
    }

    /*
    Uma vez que o sistema gere ou o usuário informe uma pontuação fora
    do limite, geramos um erro com throw, com uma mensagem mais fácil
    de ser compreendida por mim ou outra pessoa do time.
    */
    else {
        throw new Error('Pontução fora do limite permitido')
    }
}
catch (erro){
    /*
    Ao usar a instrução, message a partir do parâmetro/argumento informado 
    ao iniciar o bloco catch, podemos ter acesso ao erro encontrado durante 
    a execução, podendo ser uma mensagem de erro que criamos, ou mensagens
    internas já imbutidas na linguágem.
    */
    console.log(erro.message);
}

finally {
    //Note que, independente de ter dado erro ou não, está instrução será executada.
    document.write('Volte sempre!')
}
