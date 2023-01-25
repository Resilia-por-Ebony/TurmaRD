
// acessando a tag body
const body = document.querySelector('body')

/*
Criação de elementos HTML através do JS
*/
function criandoElementos() {
    
    // Criando uma div
    var container = document.createElement('div')
    // Atribuindo uma class chamada containter
    container.setAttribute('class', 'container')

    // Criando uma tag input com id, tipo texto e placeholder
    var input = document.createElement('input')
    input.setAttribute('id', 'entrada')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Digite uma letra aqui!')

    // Criando input com id, tipo submit e setando a função converter()
    var converter = document.createElement('input')
    converter.setAttribute('id', 'converter')
    converter.setAttribute('type', 'submit')
    converter.setAttribute('value', 'Converter')
    converter.setAttribute('onclick', 'converter()')

    // Adc input, ao container
    container.appendChild(input)
    container.appendChild(converter)
    
    // adc container ao body
    body.appendChild(container)

    // log só pra verificar como está ficando o body
    console.log(body);
}

/*
Função responsavel por fazer a conversão
*/
function converter() {
    const container = document.querySelector('.container')    
    const entrada = document.querySelector('#entrada').value

    var saida = document.createElement('span')
    saida.setAttribute('id', 'saida')

    /* 
    Verificando se existe um caracter no input, 
    lembrando que o exercício pede para que apenas
    um valor seja convertido, caso esteja vazio ou 
    com mais de um valor, deve reportar erro
    */
    if (entrada.length === 1) {
        saida.innerHTML = entrada.charCodeAt()
    }
    else {
        saida.innerHTML = 'Ahh kó é!'
    }
    
    // adc div saida ou container
    container.appendChild(saida)

    // Função que gera um reload pós 3 segundos
    setTimeout(function() {
        window.location.reload(true)
    }, 3000)
}