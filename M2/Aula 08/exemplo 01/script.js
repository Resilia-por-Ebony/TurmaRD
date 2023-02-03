/*
BIND -> Basicamente permite pegar emprestado
um método criado em outro escopo
*/

const Pessoa = {

    nome: 'Ebony',
    sobrenome: 'Alves',

    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome
    }  
}

const novoNome = {
    nome: 'Juca',
    sobrenome: 'Barnabé'
}

/*
Note que o metodo nomeCompleto foi criado no escopo de Pessoa,
mas estamos pegando emprestado para alterar o nome a partir
do objeto novoNome que naturalmente não possui um metodo
nomeCompleto.
*/
let novo = Pessoa.nomeCompleto.bind(novoNome)

/*
Note que o typeof de 'novo' retonar uma function, ou seja,
é necessário instanciá-lo como na linha 34
*/
console.log(typeof novo);
console.log(novo());



