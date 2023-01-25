/*
Gravando e recuperando uma lista de informações do local storage.
*/

var arr = [];
 
function gravar(){
    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }
    
    let novoItem = document.getElementById("entrada").value;
    arr.push(novoItem);
    document.getElementById("entrada").value = "";
    localStorage.meuArr = JSON.stringify(arr);
    console.log(arr); 
}

function mostrar(){
    let resultDIV = document.getElementById('saida');
    resultDIV.innerHTML = "";
    if (localStorage.meuArr){             
        arr = JSON.parse(localStorage.getItem('meuArr')); 
    }
    
    for(var i in arr){
        let p = document.createElement("p");
        p.innerHTML = arr[i];
        resultDIV.append(p);
    }
    console.log(arr); 
}

function limpar(){
    arr = [];
    localStorage.meuArr = JSON.stringify(arr); 
    console.log(arr);  
}