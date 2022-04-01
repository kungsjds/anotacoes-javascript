// O parametro "e" normalmente é definido para receber o próprio evento(informado no html na declaração da function), podendo acessar as informações dele, como o código do botão que foi clicado. Segue exemplo abaixo.
function returnName(e) {
    let gameName = document.querySelector('[type=text]').value;

    if ( gameName == '' ) {
        document.querySelector('#gameName').innerHTML = 'O nome do jogo aparecerá aqui.';
        document.querySelector('#gameConffirmed').style.display = 'none';
    } else {
        document.querySelector('#gameName').innerHTML = gameName;
    }
    
    // ctrlKey é o parametro do evento que informa se o botão foi pressionado junto com o ctrl(control).
    // Também tem parametros para shift, alt, tab. Basta verificar no console.log(e) abaixo.    
    if ( e.keyCode == 13 && e.ctrlKey == true) { //keyCode = 13 é da tecla Enter
        document.querySelector('#gameConffirmed').style.display = 'block';
    }

    console.log(e);

    // Sobre o keypress:
    // O evento keypress é disparado quando uma tecla que produz um valor do tipo caractere é pressionada.
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keypress_event
}