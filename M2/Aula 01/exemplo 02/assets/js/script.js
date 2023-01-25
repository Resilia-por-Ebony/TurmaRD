// const texto = document.getElementsByClassName('texto')
const abrir = document.getElementById('abrir')
const container = document.querySelector('.container')

function aberto() {
    var paragrafo = document.createElement("p")
    console.log(paragrafo);
    var texto = document.createTextNode('Estamos abertos')
    paragrafo.appendChild(texto)
    console.log(paragrafo);

    var divtexto = document.createElement('div')
    divtexto.setAttribute('class', 'txt')
    console.log(divtexto);

    divtexto.appendChild(paragrafo)
    // divtexto.appendChild(document.createTextNode('esse texto'))
    console.log(paragrafo);

    container.appendChild(divtexto)

    abrir.style.background ='green'
    abrir.style.color = 'white'
}


// var body = document.querySelector('body')
// console.log(body);

// container.appendChild(paragrafo)
// body.appendChild(paragrafo)

