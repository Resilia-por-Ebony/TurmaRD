/*
Usando JS puro: 

→ Acessando o botão 'buscar' pelo id '#buscar'
const entrada = document.querySelector('#buscar')

→ Criando a função para buscar um pokemon
function buscarPokemon() {

}
Essa função "deverá" ser chamada no botão no HTML
*/


/*
Usando JQuery
O acesso à uma tag, id ou classe ocorre de forma mais
simples. Bastando apenas informá-lo dentro dos parentes.

$('')

*/ 

/*
Aqui vamos fazer várias coisas de uma única vez,
começando com acesso ao botão pelo id='buscar'
com a instrução .click estamos indicando que ao ser
clicado, algo deverá acontecer. Este algo, é uma 
função que estamos criando anonimamente, sem a necessidade
de informar um nome para ela.
*/
$('#buscar').click(function() {

    /*
    Fetch, como a palavra traduzida diz, buscar. Essa instrução
    permite que uma requisição seja feita ao endereço informado.

    Note que, a url precisa conter o nome ou id para pesquisa,
    essa informação será passada pelo input que tem o id='pokemon'
    portanto, é ele quem passamos como parte da url. Note também que
    passamos a instrução val() que corresponde ou value em JS puro, 
    para pegar o valor digitado neste input e não apenas o elemento HTML.
    */
    fetch(`https://pokeapi.co/api/v2/pokemon/${$('#pokemon').val()}`)


    /*
    A instrução then indica processamento, ou seja neste momento estamos
    iniciando o processamento a response recebida, primeiro convertendo ou
    mantendo o arquivo no formato json
    */
    .then(function(response) {return response.json()})
    
    /*
     Em seguida, continuamos processando esta response já no formato json,
     mas note que agora temos acesso direto às chaves e valores.
    */
    .then(function(response) {

        // a variavel dados, recebe todo o json retornado da Api
        dados = response     
        
        /* 
        Podemos imprimir no console a partir de dados, o valor de qualquer
        tenha sido recebida na response.
        */
        console.log(dados.name)

        /* 
        Também podemos inserir essa informação em qualquer parte de nossa
        página, indicando o local e usando a instrução text que equivale
        ao innerHTML que usamos em js puro.
        */
        $('.saida').text(dados.name)
        }
    )
})