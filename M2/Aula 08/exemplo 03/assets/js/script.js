/*
    Heranças permitem herdar atributos e métodos de outras classes,
    note que neste primeiro momento existem atributos identicos para
    client e employee. 
*/

class Client {

    constructor (nome, cpf, email) {
        this.nome = nome,
        this.cpf = cpf
        this.email = email
    }
}

class Employee {
    
    constructor (nome, cpf, matricula) {
        this.nome = nome,
        this.cpf = cpf,
        this.matricula = matricula
    }
}


/*
    Agora, refatorando as classes usando conceitos de herança, 
    podemos partir de uma pergunta simples, o que clientes e
    funcionários são? Entendendo que ambos se enquadrão como 
    pessoas por exemplo, Pessoas poderia ser o nome da classe pai
    para facilitar a compreensão. 
*/
class Pessoa {

    // Note que este construtor tem os atributos comuns aos clientes e funcionários
    constructor (nome, cpf) {
        this.nome = nome,
        this.cpf = cpf
    }

    caixaAlta() {
        return this.nome.toUpperCase()
    }
}

/* 
    Para identificar que a classe Cliente está herdando métodos e/ou 
    atributos da classe Pessoa, usamos a palavra 'extends'
*/
class Cliente extends Pessoa{

    // é necessário setar os parâmetros nome e cpf que estão sendo herdados
    constructor (nome, cpf, email) {
        /*
        A instrução 'super' vai permitir que tenhamos acesso aos atributos
        da classe pai (Pessoa). Desta forma podemos usar 2 construtores ao mesmo
        tempo. OBS: Caso a classe filha não tenha um construtor, o construtor 
        da classe pai será usado.
        */
        super(nome, cpf)

        /*
            Note que, diferente do funcionário, a classe Cliente possui o 
            atributo email, ele pode ser criado dentro da classe normalmente.
        */
        this.email = email
    }

    // Note que estamos alterando o método criado na classe pai
    caixaAlta() {
        return this.email.toUpperCase()
    }
}

class Funcionario extends Pessoa{
    
    constructor (nome, cpf, matricula) {
        super(nome, cpf)
        this.matricula = matricula
    }
}


cliente1 = new Cliente('Ebony', '123', 'ebony@e.com')
funcionario1 = new Funcionario('Jubileu', '000', '1020')

console.log(cliente1)

console.log(cliente1.caixaAlta())
console.log(funcionario1.caixaAlta());

console.log(JSON.stringify(cliente1));
console.log(JSON.stringify(cliente1, (chave, valor) => valor, 2));
