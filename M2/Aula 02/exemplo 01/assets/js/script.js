// const abrir = document.getElementById('abrir')
const body = document.querySelector('body')
// const container = document.querySelector('.container')


{/* <div class="container">
        <div class="btns">
            <button class="btn" id="abrir" onclick="aberto()">Abrir</button>
            
            <button class="btn" id="fechar">Fechar</button>
        </div>

    </div> */
}


var container = document.createElement('div')
container.setAttribute('class', 'container')

var btns = document.createElement('div')
btns.setAttribute('class', 'btns')

var abrir = document.createElement('input')
abrir.setAttribute('id', 'abrir')
abrir.setAttribute('type', 'submit')
abrir.setAttribute('onclick', 'aberto()')

btns.appendChild(abrir)
container.appendChild(btns)
body.appendChild(container)


function aberto() {

    var paragrafo = document.createElement('p')
    var texto = document.createTextNode('Estamos abertos')

    paragrafo.appendChild(texto)

    var txt = document.createElement('div')
    txt.setAttribute('class', 'txt')

    txt.appendChild(paragrafo)
    // txt.appendChild(document.createTextNode('esse texto aqui'))

    container.appendChild(txt)

    abrir.style.background = 'green'
    abrir.style.color = 'white'

}