let numero = document.querySelector('#numero')
let saida = document.querySelector('#saida')

function calcular() {
    /*Criando um elemento HTML (IMG) */
    var imagem = document.createElement('img')
    
    // Criando o atrbuto id='imagem'
    imagem.setAttribute('id', 'imagem')

    // Verificando se o input está vazio
    if (numero.value.length === 0) {

        // Escrevendo uma mensagem dentro da <div id='saida'>
        saida.innerHTML = 'Sem valor não da pra calcular'

        // Alterando a propriedade background
        saida.style.background = '#630505'

        /* Criando o atributo 'src' para indicar o caminho da imagem
        que será usada, caso este teste retorne verdade */
        imagem.setAttribute('src', 'assets/img/erro1.png')
        saida.style.color = '#fff'
    }   

    else if (numero.value < 0) {
        saida.innerHTML = 'Valor negativo não tem como'
        saida.style.background = '#fff'

        saida.style.color = '#101010'

        /*
        Note que podemos alterar o caminho e mostrar outra
        imagem de acordo com a condição, neste caso, esse 
        imagem será mostrada, caso um valor menor que 0
        seja inserido no input */
        imagem.setAttribute('src', 'assets/img/erro2.jpeg')
        
    }

    else {
        /*
        Caso o valor inserido no input esteja correto, não queremos
        que uma imagem seja carregada, porém, a linha 53 está carregando
        imagens idependente da condição que retorna verdadeira. 
        
        Note que sem a linha abaixo, um "espaço" para imagem será reservado
        impurrando o conteúdo da tabuáda para cima.*/
        imagem.style.display = 'none'


        saida.innerHTML = ''
        saida.style.background = '#05635b'

        /*
        Este for cria a tabuada, mas note que é necessário usar de (+=)
        pós o innerHTML, porque ele naturalmente mostraria apenas uma
        linha, estando dentro do for, terminaria mostrando apenas a última
        repetição, na forma como está, ele está 'mostrando' todas as linhas
        sem sobrepor as que já foram criadas */
        for (let inicio=1; inicio <= 10; inicio++) {
            saida.innerHTML += `${numero.value} x ${inicio} = ${numero.value * inicio}<br>` 
        }
    }
    saida.appendChild(imagem)

}