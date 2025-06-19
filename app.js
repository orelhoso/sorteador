function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){

        do {
            numero = obterNumeroAleatorio(de, ate);
        } while(sorteados.includes(numero));

        sorteados.push(numero);
        if(sorteados.length == ate - de + 1){
            break;
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alteraStatusBotao('btn-sortear');
    alteraStatusBotao('btn-reiniciar');
}

function reiniciar() {
    document.getElementById('quantidade').value ='';
    document.getElementById('de').value ='';
    document.getElementById('ate').value ='';
    document.getElementById('resultado').innerHTML ='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alteraStatusBotao('btn-sortear');
    alteraStatusBotao('btn-reiniciar');
}

function alteraStatusBotao(idBotao) {
    let botao = document.getElementById(idBotao);
    
    if (botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    } else {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}