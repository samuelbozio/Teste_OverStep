$(document).ready(function() {
    $("#cpf").mask("000.000.000-00");
    $('#fone').mask('(00) 0000-0000');

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, ''); 
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; 

        var soma, resto;
        soma = 0;

        for (var i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;

        for (i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    }

    function validarTelefoneComDDD(telefone) {
        var telefoneLimpo = telefone.replace(/\D/g, '');
        if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) 
            return false;
        
        var ddd = telefoneLimpo.substring(0, 2);
        var numero = telefoneLimpo.substring(2);

        if (!(ddd >= '11' && ddd <= '99')) 
            return false;
        
        if (telefoneLimpo.length === 11 && numero[0] !== '9') 
            return false;
        
        return true;
    }

    function validarCampo(idCampo, validador) {
        var valor = $("#" + idCampo).val();
        var valido = validador(valor);
        removerSinalizacaoErro(idCampo);
        if (!valido) {
            mostrarMensagemCampoInvalido(idCampo);
            return false;
        }
        return true;
    }


    



    function mostrarMensagemCampoInvalido(idCampo) {
        sinalizarErroCampo(idCampo);
        $("#" + idCampo).focus();
    }


    function sinalizarErroCampo(idCampo) {
        $("#" + idCampo).css("border", "2px solid red");
    }


    function removerSinalizacaoErro(idCampo) {
        $("#" + idCampo).css("border", "");
    }


    function validarFormatoCPF() {
        return validarCampo('cpf', validarCPF);
    }

    function validarFormatoTelefone() {
        return validarCampo('fone', validarTelefoneComDDD);
    }







    $("#novoBtn").click(function() {
        $("#cadastroForm")[0].reset();
        removerSinalizacaoErro('cpf');
        removerSinalizacaoErro('fone');
    });


    $("#cadastroForm").submit(function(event) {
        event.preventDefault(); 

        if (!validarFormatoCPF() || !validarFormatoTelefone()) {
            return; 
        }

        var dados = {
            nome: $("#nome").val(),
            cpf: $("#cpf").val(),
            fone: $("#fone").val(),
            email: $("#email").val(),
            estadoCivil: $("#estadoCivil").val()
        };
        $.ajax({
            url: 'http://localhost:3000/validar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function(response) {
                alert('Dados gravados com sucesso!');
            },
            error: function(error) {
                alert('Erro ao gravar os dados.');
            }
        });
    });


    $("#apagarBtn").click(function() {
        var dados = {
            cpf: $("#cpf").val()
        };

        $.ajax({
            url: 'http://localhost:3000/apagar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function(response) {
                alert('Dados apagados com sucesso!');
                $("#cadastroForm")[0].reset();
                removerSinalizacaoErro('cpf');
                removerSinalizacaoErro('fone');
            },
            error: function(error) {
                alert('Erro ao apagar os dados.');
            }
        });
    });
});
