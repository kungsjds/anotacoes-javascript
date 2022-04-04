// Diferença teórica entre Array e Object:
// Um Array é uma listagem numerada
// Um Object é uma listagem nomeada

// Array
let games = [
    'Hogwarts Legacy',
    'Elden Ring',
    'Lost Ark',
    'League of Legends',
    'Valorant'
];

// Object
let game = {
    nome:'Hogwarts Legacy',
    genero:'Open World RPG',
    desenvolvedor:'Avalanche Software',
    distribuidora:'Warner Bros. Games',
    valor: 0.00,
    valorTotal:function(nome, valor) {
        this.valor = valor;
        console.log(nome + " R$" + this.valor);
    }
    // O "this" se refere ao próprio elemento, no caso o objeto.
};

// Pode ser acessado das duas formas, porém a segunda é mais comum.
// 1 - console.log(game['nome']);
// 2 - console.log(game.nome);

console.log(game.valorTotal("Hogwarts Legacy", 299.99));
console.log(game.valorTotal(game.nome, game.valor));




// Um array pode ter objetos declarados em sua composição, como no exemplo abaixo.

let gameList = [
    {
        name: 'Hogwarts Legacy', 
        genre: 'Open World RPG', 
        developer: 'Avalanche Software', 
        publisher: 'Warner Bros. Games',
        valor:function(){
            console.log(this.name + " R$299,99");
        }
    },
    {
        name: 'Elden Ring', 
        genre: 'Open World RPG', 
        developer: 'FromSoftware', 
        publisher: 'BANDAI NAMCO',
        valor:function(valor) {
            console.log(this.name + " R$" + valor);
        }
    },
];

console.log(gameList[1].name);
gameList[0].valor();
gameList[1].valor(249.99);