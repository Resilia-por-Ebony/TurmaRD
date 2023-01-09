/*
Vale ressaltar que em JS, um array também é um objeto.

Basicamente, um objeto permite inserção e acesso de 
elemento por chave e valor. 
Representado por {}, podendo ser iniciado vazio ou
já com as informações. Estas chaves pode ser removidas,
atualizadas e criadas conforme necessidade.
*/

// nome do objeto
let pessoa = {

    // chave e    valor      
    nome     :   'Leonardo',
    idade    :    30
}

// Mostra o objeto inteiro
console.log(pessoa);

// Mostra apenas o valor da chave nome
console.log(pessoa.nome);

/*
Array são como listas que podem receber qualquer tipo de
dado, não sempre necessário criar um para cada coisa.

Representado por [] Sendo índice e valor. Lembrando que 
este índice é criado internamente, mas permite que um 
elemento seja acessado por ele. 
*/

let coisas = ['uva', 'goiaba', 'manga', 15, 15.50, false]
// //            [0          1        2   3     4     5] 

// Mostra apenas o valor que estiver no índice 2
console.log(coisas[2]); // -> manga 

// Adiciona 'batata' no início do array
coisas.unshift('batata')
    
// Adiciona '200' no final do array
coisas.push(200)

/*
Pode ser usado também para remover um item do array
Neste cenário: 
 -> 2 representa a posição pelo indíce.
 -> 0 indica que nenhum elemento será removido do array
 -> 'qualquer dado' será inserido no array
*/ 
coisas.splice(2, 0, 'qualquer dado')

/*
Neste cenário:
 -> 3 representa o índica a partir do qual a ação será feita 
 -> 2 representa quandos valores serão removidos.*/
coisas.splice(3, 2)