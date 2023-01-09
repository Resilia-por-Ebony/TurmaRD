/*
Note que agora vamos acessar os elementos de formas diferentes
apenas para ilustração, na prática usamos apenas 'querySelector
*/

// Note que desta forma, não é necessário informar #
var n1 = window.document.getElementById('numero1')

// Note que desta forma, é necessário informar # ou .
var n2 = window.document.querySelector('#numero2')
let resp = window.document.querySelector('.bolinha')


/* Esta função irá calcular a soma dos elementos */
function calcular() {

    /* Verificando se os campos estão vazio, lembrando que esta é 
    uma verificação simples, apenas para este momento de estudo. */
    if (n1.value.length != 0 && n2.value.length != 0) {
        
        /* Ao acessar: 
        n1 -> Retorna o tipo de dado desta variário
        n1.value -> Retorna o valor desta variável, ou seja, seu conteúdo
        Number(n1.value) -> Converte o valor para tipo numérico. */
        resp.innerHTML = Number(n1.value) + Number(n2.value)

        /* Aqui estamos usando uma 'função interna' para fazer uma pausa na execução.
        Esta função precisa de 2 parâmentros, a função que será executada e o tempo
        que deve ser aguardado antes da execução. 

        Neste caso, quando este if for executado, ela irá chamar a função apagar()
        mas antes, irá aguardar 3 segundos, sendo configurado como 3000 milesegundos. */
        setTimeout(function() {
            apagar()
        }, 3000)
    }

    /* Caso um ou outro input esteja vazio ao clicar no botão calcular, 
    um alerta será enviado como feedback ou usuário. */
    else {
        alert('Para de ser zoeiro!!! Um ou os 2 valores não foram inseridos')
    }
}

/* Esta função faz um reload na página, ou seja, atualiza a página,
como se estivesse clicando no ícone de atualizar de seu navegador.

Note que ela está sendo chamada dentro da função calcular()*/
function apagar() {
    window.location.reload()
}
