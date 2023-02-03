// FIFO - first in, first out 

const filaFIFO = () => {
    // array que vai armazenar a fila de tarefas
    const dados = []

    // adc tarefas no array 'dados'
    const add = (tarefa) => {
        dados.unshift(tarefa)
    }

    // removendo tarefas do array 'dados'
    const remover = () => {
        const pdados = dados[dados.length-1]
        dados.splice(pdados, 1)
    }

    // imprimindo lista de tarefas
    const imprimir = () => console.log(dados);

    // retornando métodos criados 
    return {
        add,
        remover,
        imprimir
    }
}


const fila = filaFIFO()

fila.add('tarefa 01')
fila.add('tarefa 02')
fila.add('tarefa 03')

fila.remover()
fila.imprimir()
