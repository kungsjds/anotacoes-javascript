function passouMouse(classe) {
    if (document.querySelector(classe).innerHTML == 'Passe o mouse aqui!') {
        document.querySelector(classe).innerHTML = 'Oi, tudo bem?';
    } else {
        document.querySelector(classe).innerHTML = 'Passe o mouse aqui!';
    }
}

function tirouMouse(classe) {
    if ( document.querySelector(classe).innerHTML == 'Passe o mouse aqui também!' ) {
        document.querySelector(classe).innerHTML = 'Já vai embora? :(';
    } else {
        document.querySelector(classe).innerHTML = 'Passe o mouse aqui também!';
    }
}

function clicou() {
    document.querySelector('.tituloPrincipal').classList.add('shadow');
    document.querySelector('.tituloSecundario').classList.add('shadow');
}

function rightAlign() {
    document.querySelector('.container').style.alignItems = 'flex-end';
}

function leftAlign() {
    document.querySelector('.container').style.alignItems = 'flex-start';
}

function centerAlign() {
    document.querySelector('.container').style.alignItems = 'center';
}