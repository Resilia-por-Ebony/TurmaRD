/*
Atributos privados não podem ser acessados livremente
em outros escopos. É na maioria dos casos, uma boa prática.
*/
class Cliente {
    #nome
    #email
    #senha

    // atente ao # antes dos nomes dos atributos
    constructor(nome, email, senha) {
        this.#nome = nome,
        this.#email = email,
        this.#senha = senha
    }

    /* 
        Método 'get' neste cenário, permitirá o acesso ao 
        valor do atributo 'nome' acessando apenas pelo nome
        do atributo

    */
    get nome() {
        return this.#nome
    }


    /*
        Ainda trabalhando com o atributo nome, note que podemos
        manter o mesmo nome do método neste caso. 
    */
    set nome(nome) {
        this.#nome = nome
    }

    /*
        Este método permitirá o acesso aos valores dos atributos
        e sua conversão para json
    */
    toJSON() {  
        return {
            nome: this.#nome,
            email: this.#email,
            senha: this.#senha
        }
    }
}

const c1 = new Cliente('Ebony', 'e@email.com', '000')

// console.log(Object.keys(c1));
// console.log(Object.values(c1));

console.log(c1.nome);
c1.nome = 'Jubileu'
document.write(`Nome: ${c1.nome}`)

/*
    Note que o acesso ao valor do atributo email permanece
    privado em todos os cenários.

*/
console.log(c1.email);
document.write(`<br>Email: ${c1.email}`)

// continua privado
const dados = JSON.stringify(c1)
document.write(`<br>Email: ${dados.email}`)

// posso ver, mas não posso usar
console.log(c1); 

// O método que criamos na linha 40 permite os acessos abaixo
console.log(JSON.stringify(c1));
console.log(JSON.stringify(c1, (chave, valor) => valor, 2));
