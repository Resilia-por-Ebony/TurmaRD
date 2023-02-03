class Animais {
    #nome
    #cor
    #qtdPatas
    #som
    constructor(nome, cor, qtdPatas, som) {
        this.#nome = nome,
        this.#cor = cor,
        this.#qtdPatas = qtdPatas,
        this.#som = som
    }

    comer(comida) {
        return `O dogão ${this.#nome} comeu ${comida}!`
    }
}

class Cachorro extends Animais{
    #abanando
    constructor(nome, cor, qtdPatas, som, abanando) {
        super (nome, cor, qtdPatas, som)
        this.#abanando = abanando
    }
}

class Gato extends Animais{
    #unha
    constructor(nome, cor, qtdPatas, som, unha) {
        super (nome, cor, qtdPatas, som)
        this.#unha = unha
    }

    comer() {
        return 'Suco de mamão, no almoço era...'
    }
}

cachorro1 = new Cachorro('Bob', 'preto/marrom', '4', 'au au au auuuuuu!', true)
console.log(cachorro1.comer('Carne'));

gato1 = new Gato('Canalha', 'preto', '4', 'miau miel', false)
console.log(gato1.comer('Peixe'));
// Note que o método comer dentro da class Gato foi alterado

