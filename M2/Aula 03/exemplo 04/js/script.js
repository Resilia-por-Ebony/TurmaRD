const pokeNome = document.querySelector('.pokenome');
const pokeNumero = document.querySelector('.pokenumero');
const pokeImagem = document.querySelector('.pokeimagem');

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

// Setando o pokemon inicial para quando o site abrir
let poke1 = 25

// Transformando em uma função assincrona
const buscarPokemon = async (pokemon) => {

    /* 
    Usando fetch para buscar um pokemon, informando a url, passando o nome do poke
    como endpoint e usando await para que essa instrução seja completada antes de
    seguir para as próximas
     */
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    /*
    Verificando se o status da response é 200, ou seja, se a requisição foi aceita
    e a response retornou com sucesso.
     */
    if (APIresponse.status === 200 ) {
        // Convertendo a resposta em arquivo json
        const dados = await APIresponse.json()
        /* 
        Retornando dados que neste momento contem a resposta, ou seja, contem as
        informações do pokemon que passado no endpoint 
        */
        return dados
        // console.log(dados.name);
    }
}

/*
Função responsável por carregar na página as informações encontradas 
*/
const renderizarPokemon = async (pokemon) => {

    /*
    O retorno da função buscarPokemon é justamente o 'dados' que contem 
    o json com todas as informações sobre o pokemon buscado. Estamos 
    salvando essas informações em outra variável que também chamamos de dados
    mas poderia ser qualquer outro nome.
    */
    const dados = await buscarPokemon(pokemon)

    // Caso dados tem as informações, vamos preencher os campos
    if (dados) {
        pokeImagem.style.display = 'block'
        pokeNumero.innerHTML = dados.id
        pokeNome.innerHTML= dados.name

        /*
        Note que alguns pokemons não tem um gif animado neste caminho que estamos
        usando, existem várias possíbilidades e caminhos diferentes para encontrar
        os pokemons que não são carregados com este. Uma dica seja setar para que
        caso um caminho não tenha a imagem ou gif, outro seja executado, desta forma 
        sempre teremos uma imagem sendo carregada.
        */
        pokeImagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        poke1 = dados.id
        input.value = ''
    }

    /*
    Caso seja inserido um valor incorreto, as informações como imagem 
    e campo do input são 'apagados' e uma mensagem de erro aparece 
    no lugar do nome do pokemon
    */
    else {
        pokeImagem.style.display = 'none'
        pokeNumero.innerHTML = ''
        pokeNome.innerHTML= 'Ops, ñ encontrei!'
    }
}

/*
Importante lembrar que a API aceita nomes minúsculos para busca,
desta forma, estamos garantindo que quando o evento de submit for
ouvido, o input será convertido em letras minúsculas.
*/
form.addEventListener('submit', (e) => {
    e.preventDefault()
    renderizarPokemon(input.value.toLowerCase())
})


/*
Adc um evento aos botões de seguir e retroceder
*/
buttonPrev.addEventListener('click', () => {
    if (poke1 > 1) {
        poke1 -= 1
        renderizarPokemon(poke1)
    }
})

buttonNext.addEventListener('click', () => {
        poke1 += 1
        renderizarPokemon(poke1)
})

/* 
Chamando a função, passando poke1 como argumento, 
já que toda a lógica foi construido em cima dele 
*/
renderizarPokemon(poke1)


