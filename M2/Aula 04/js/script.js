/*
Primeiros passos com JQuery

Note que o acesso às tags, ids ou classes fica muito
mas simples de ser feita, inclusive podemos adicionar 
diretamente evendo e funções às mesmas.
*/

/* 
Usando o metodo fadeIN, ou seja, aparecer, diretamente
na tag H1 da página.
*/

/*
Usando a css diretamente, neste caso, aplicando na tag P
da página, uma configuração de tamanho da fonte e cor
*/
$('p').css({
    'font-size': '40px',
    'color': 'red'
})

/*
Acessando o botão que tem o id='btnMais' usando .on
para indicar logo a seguir qual evento será aguardado,
neste caso um evento de click, ou seja, ao ser clicado, 
este botão executará a função que chamamos de 'mais'

Note mais abaixo que isso pode ser feito de forma ainda mais
dinâmica.
*/
$('#btnMais').on('click', Mais)

function Mais() {

    // Append, estamos inserindo neste caso, mais textos ao elemento P
    $('p').append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores modi rerum, maiores eum officiis, corrupti, voluptas id molestiae quae reiciendis in? Error consequuntur, blanditiis natus id quos dolorem dolore.')

    /*
    Animate permite que façamos animações, transições e outros efeitos
    de forma dinâmica. Neste caso estamos fazendo alterações de estilo,
    mas permitindo que elas sejam feitas de forma pausada, neste caso em
    5 milesegundos.
    */
    $('p').animate({'font-size': '20px','color': 'blue'}, {duration: 500})

    /*
    Note que as alterações acima são as mesmas deste bloco de estilo,
    a única diferença que é que fazendo aqui, estamos vendo apenas o resultado
    e usando de animação podemos ver o processo.
    */
    // $('p').css({
    //     'font-size': '20px',
    //     'color': 'blue'
    // })
}   

/*
Note que a chamada para o função pode ser mais dinâmica como
no exemplo abaixo onde usamos a mesma função, porém sem a necessidade
de nomeá-la e instaciá-la separadamente.

$('#btnMais').click(function() {
    $('p').append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores modi rerum, maiores eum officiis, corrupti, voluptas id molestiae quae reiciendis in? Error consequuntur, blanditiis natus id quos dolorem dolore.')

    $('p').animate({'font-size': '20px','color': 'blue'}, {duration: 500})
})

*/