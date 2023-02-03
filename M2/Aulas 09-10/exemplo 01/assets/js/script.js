const produtos = [
    {
        id: 1,
        nome: 'Bonno',
        sabor:'Doce de leite',
        categoria: 1,
        preco: 3.50,
        loja: 1,
        imagem: 1
    },{
        id: 2,
        nome: 'Negresco',
        sabor:'Baunilha',
        categoria: 1,
        preco: 3.00,
        loja: 1,
        imagem: 2 
    },{
        id: 3,
        nome: 'Iogurte',
        sabor: 'Coco',
        categoria: 3,
        preco: 13.90,
        loja: 1,
        imagem: 3
    },{
        id: 15,
        nome: 'Dell Vale',
        sabor: 'Uva',
        categoria: 2,
        preco: 12.90,
        loja: 2,
        imagem: 15
    }
]

categorias = {
    1: 'Biscoito',
    2: 'Suco',
    3: 'Laticínio'
}

lojas = {
    1: 'Mooca SP',
    2: 'Ipiranga SP',
    3: 'Ipanema RJ'
}

imagens = {
    1: 'https://s3-sa-east-1.amazonaws.com/bluesoft-erp/alabarce/ecommerce/produtos/fotos/fb6cae89-4aae-482c-b1bd-b587a0b35d22/foto_large.jpg',
    2: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/985510-03-10-2022-19-11-47-153_big.jpg',
    3: 'https://centralmaxsupermercados.com.br/imagens_site/7896275970536.jpg',
    15: 'https://www.delvalle.com.br/assets/images/products/product/dv-fresh-mp-1500ml-uva-1121-lazy.jpg'
}

/*
    Mapeando array de produtos e fazendo a 'conexão'
    entre os id's e seus respectivos valores
*/
const prodCategoria = produtos.map(item => {
    item.categoria = categorias[item.categoria]
    item.loja = lojas[item.loja]
    item.imagem = imagens[item.imagem]
})

// console.log(produtos);

const renderizar = produtos.map((item) => {
    document.write(
        `
         <img src='${item.imagem}' width=100px><br>
         Produto: ${item.nome}<br> 
         Sabor: ${item.sabor}<br> 
         Preço: ${item.preco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}<br>
         Categoria: ${item.categoria}<br>
         Loja:  ${item.loja}<br><br>
        `
    )
})


// Simulando produtos em um carrinho (array)
const carrinho = [
    {
        id: 1,
        nome: 'Bonno',
        sabor:'Doce de leite',
        categoria: 1,
        preco: 3.50,
        loja: 1,
        imagem: 1,
        qtd: 3
    },
    {
        id: 15,
        nome: 'Dell Vale',
        sabor: 'Uva',
        categoria: 2,
        preco: 8.90,
        loja: 1,
        imagem: 15,
        qtd: 4
    }
]

// console.log(carrinho);

// usando reduce para reduzir o array a único valor, neste caso, fazendo a soma dos valores
const total1 = carrinho.reduce((soma, item) => item.preco + soma, 0)

/*
    Note que neste caso estamos usando um map antes
    para além de mapear, fazer a primeira operação que seria
    multiplicar o valor unitário pela quantidade comprada e
    no segundo momento, usamos um reduce para reduzir este
    array retornado pelo MAP
*/
const total2 = carrinho
    .map(item => item.preco * item.qtd)
    .reduce((soma, subtotal) => subtotal + soma, 0)

console.log(total1);
console.log(total2);


/*
    Agora estamos após mapear o array, focando na chave 'preco'
    do objeto, filtramos para encontrar apenas os preços 
    menores que 5 e depois usamos o indice do reduce
    para trazer um total de produtos nesta condição.
*/
const precinhos = produtos
    .map((item) => item.preco)
    .filter((item) => item < 5)
    // .reduce((qtd, item, indice, array) => array.length)
    .reduce((qtd, item, indice) => ++indice)

console.log(precinhos);


