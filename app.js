function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {

        alert('Número mínimo maior que número máximo!');
        reiniciar();

    } else {

        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {

            do {
                numero = obterNumeroAleatorio(de, ate);
            } while (sorteados.includes(numero));

            sorteados.push(numero);
            if (sorteados.length == ate - de + 1) {
                break;
            }
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

        alteraStatusBotao('btn-sortear', 'off');
        alteraStatusBotao('btn-reiniciar', 'on');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alteraStatusBotao('btn-sortear', 'on');
    alteraStatusBotao('btn-reiniciar', 'off');
}

function alteraStatusBotao(idBotao, status) {
    let botao = document.getElementById(idBotao);
    if (status == 'on' && botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else if (status == 'off' && botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }


}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}