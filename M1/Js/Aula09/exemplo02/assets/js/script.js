/*
Agora vamos acessar o elemento container,lembrando que 
se trata de uma classe. Existem algumas possiblidades.
*/

/*
forma mais antiga: 
    getElementsByClassName
    getElementById
    ..

forma mais recente e que vamos utilizar.
    querySelector(. se for classe, # se for id)
*/   

let container = window.document.querySelector('.container')

// Também vamos trocar write por innerHTML para está ação
container.innerHTML = 'Escrevendo no container'

/* 
Para recaptular e gravar bem, recrie o exemplo1, 
mas agora as informações devem estar dentro do container.
*/



