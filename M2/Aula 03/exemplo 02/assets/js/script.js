
// Primeiros passos com Json 

// Criando um objeto user
const user = {
    nome: 'Ebony',
    email: 'ebony@ebony.com',
    senha: 'sucodefruta',
    jogos: {
        GTA: 2015,
        SuperMario: 1990,   
        CS: 2008  
    },
    marcas: {
        tenis: ['Nike', 'Adidas'],
        camisa: ['Nike', 'Ecko'],
        bermuda: ['Ecko', 'New Era']
    }
}

console.log(user);

// Convertendo objeto em Json
console.log(JSON.stringify(user));

// Gerando um json mais organizado a partir de uma arrow function
console.log(JSON.stringify(user, (chave, valor) => {    
    return valor
}, 2));

