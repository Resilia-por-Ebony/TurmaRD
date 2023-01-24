
/* 
acessando o botão pelo ID, criando uma função que 
a partir de um 'click' será executada 
*/
$("#pesquisarCEP").on("click", function(){

    /*
    Acessando o span que está dentro da div 'final' e mudando
    o display para none, ou seja quando o botão for clicado, essa 
    mensagem será escondida.
    */
    $("#loading").css({
        'display': 'none'
    })

    /*
    Acessando o input para pegar o cep digitado,
    caso exista - no cep digitado, o replace irá 
    substituir por '' espaço vazio.
    */
    var cep = $("#cep").val().replace(/[^0-9]/g,'');


    /*
    Verificando se o cep digitado não está vazio e 
    se tem exatamente 8 caracteres, independente 
    do tipo de dado, verificando com 2 '='
    */
    if(cep !== "" && cep.length == 8){

        /*
        Estando tudo certo com o CEP, os items da div 'saida' que
        estavam escondidos, serão mostrados.
        */ 
        $('.saida').css({
            'display': 'block'
        })

        //Iniciando nossa estrutura ajax
        $.ajax({
            // informando a url da API que será consumida
            url: "https://viacep.com.br/ws/"+cep+"/json/",

            // informando qual verbo será utilizado nessa requisição
            type: "GET",

            // innformando o tipo de arquivo esperado
            dataType: "json",

            // caso tenhamos sucesso, esta função será executada
            success: function (data) {

                /*
                Verificando se ocorreu algum erro muito inesperado,
                diferente de undefined que pode ser um erro comum
                para este tipo de requisição.
                */
                if(data.erro !== undefined){
                    alert("CEP inválido ou não encontrado");
                }
                
                /*
                Caso não ocorra nenhum erro, vamos inserir as 
                informações que pegamos da API em seus lugares.
                Lembrando que nesta aplicação, estamos inserindo
                as informações dinamicamente dentro dos spans
                que criamos no HTML.
                */
                else{
                    $('#c').text(data.cep)
                    $("#logradouro").text(data.logradouro);
                    $("#bairro").text(data.bairro);
                    $("#localidade").text(data.localidade);
                    $("#uf").text(data.uf);
                    $("#ddd").text(data.ddd);
                }
                /*
                Loading, é o span que está dentro da div 'final', 
                seu objetivo é dar um feedback ao usuário, informando
                de forma amigável o que está acontecendo com a 
                pesquisa feita por ele. Como ele inicia sendo display none,
                ou seja, escondido, aqui estamos fazendo ele aparecer com a 
                instrução SHOW
                */
                $('#loading').show();
            },

            /*
            Aqui vamos lidar com erros, caso exista de qualquer tipo que
            não permita o sucesso da requisição, neste caso, estamos mudando
            o display da 'saida para none, ou seja, escondendo e também
            limpando o campo de input no qual foi digitado o cep.

            Por fim, o loading, responsavel por dar um feedback, apresenta a 
            mensagem de erro.
            */
            error: function(data){
                $('.saida').css({
                    'display': 'none'
                })
                $('#cep').val('')
                $('#loading').text('Algum erro ocorreu, consulte o log.');
            },

            /*
            Aqui estamos lidando com a finalização de nossa requisição,
            quando estiver completa, passando pelos casos anteriores,
            ela será finalizada, executando a função criada abaixo.
            Basicamente ela vai apagar o campo de imput e o loading dará
            uma mensagem de finalização ao usuário.
            */
            complete: function(){
                $('#loading').text('Valeu por utilizar!');
                $('#cep').val('')
            }
        });

    /*
    Note que esse else pertence ao if da linha 30, ou seja,
    caso seja inserido um valor menor ou maior que 8 caracteres, 
    ou esteja vazio, esse else será executado apagando todas as 
    informações de saida, campo de input e gerando um alerta
    informando ao usuário que deve conter 8 caracteres para 
    perfeita busca.
    */
    }else{
        $('.saida').css({
            'display': 'none'
        })
        $('#cep').val('')
        alert("CEP deve conter 8 digitos");
    }
});
