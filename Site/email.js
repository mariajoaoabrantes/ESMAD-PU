
//função para correr o códido mais rápido
$(document).ready(function(){

    //função para enviar o formulário
    $('#contactform').submit(function(e){
        //prevenir que a página recarregue antes de enviar o formulário
        e.preventDefault();

        //definir variáveis com o valor dos campos
        var nome = $("#form27").val();
        var email = $("#form28").val();
        var mensagem = $("#form30").val();

        //template dado pelo emailjs para js    
        var template_params = {
            "reply_to": email,
            "from_name": nome,
            "to_name": "Maria Abrantes",
            "message_html": mensagem
        }
         
         var service_id = "default_service";
         var template_id = "template_7nipI0oX";
         emailjs.send(service_id,template_id,template_params);
        

    });

});

