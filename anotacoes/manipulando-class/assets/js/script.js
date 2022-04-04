// O classList retorna um elemento chamado DOM Token List. Ele irá retornar o objeto que controla as classes do elemento que foi selecionado na query.
// Depois é só adicionar uma class com o add ou remover com remove.

function cleanColorBd() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
}


function vermelho() {
    cleanColorBd();
    document.querySelector('#exemplo').classList.add('vermelho');
}

function verde() {
    cleanColorBd();
    document.querySelector('#exemplo').classList.add('verde');
}

function azul() {
    cleanColorBd();
    document.querySelector('#exemplo').classList.add('azul');
}


// O contains, verifica se a classe informada já está definida no elemento e retorna um true ou false.
function troca() {
    if (document.querySelector('#exemplo').classList.contains('vermelho')) {
        document.querySelector('#exemplo').classList.remove('vermelho');
        document.querySelector('#exemplo').classList.add('verde');
    } else if (document.querySelector('#exemplo').classList.contains('verde')) {
        document.querySelector('#exemplo').classList.remove('verde');
        document.querySelector('#exemplo').classList.add('azul');
    } else {
        cleanColorBd();
        document.querySelector('#exemplo').classList.add('vermelho');
    }
}