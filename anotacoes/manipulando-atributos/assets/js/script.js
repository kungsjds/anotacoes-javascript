// O setAttribute, altera o valor do atributo informado. Deve informar entre "()", primeiro o nome do atributo 
// e depois, separado com vírgula, o nome do valor que ele irá receber. Como no exemplo abaixo.

function setImage(filename, gameTitle) {
    document.querySelector('.image').setAttribute('src', "assets/images/" + filename);
    document.querySelector('.image').setAttribute('data-game', gameTitle);
}


// O getAttribute pega o valor do atributo informado.
function getGame() {
    let game = document.querySelector('.image').getAttribute('data-game');

    alert("O jogo selecionado é: " + game);
}

// São muito úteis para formulários. Como por exemplo, para pegar algum dado oculto. Ou alterar algo no formulário.