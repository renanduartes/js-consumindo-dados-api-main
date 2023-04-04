async function buscaEndereco(cep){
    try {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCEPConvertido = await consultaCEP.json();
    if (consultaCEPConvertido.erro){
        throw Error('CEP Inexistente');
    }

    var cidade = document.getElementById('cidade');
    var endereco = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');

    cidade.value = consultaCEPConvertido.localidade;
    endereco.value = consultaCEPConvertido.logradouro;
    estado.value = consultaCEPConvertido.uf;
    bairro.value = consultaCEPConvertido.bairro;

    cidade.disabled = "";

    console.log(consultaCEPConvertido);
} catch(erro){
    mensagemErro.innerHTML = `<p style="color: red" >CEP errado. Tente novamente!</p>`
    console.log(erro);
}
}



var cep1 = document.getElementById('cep')
cep1.addEventListener('focusout', () => buscaEndereco(cep.value))