// LOOP FOR:
// O i++ incrementa o i para a contagem do loop, que no caso vai até 50, no exemplo abaixo.
let count = '';
for(let i = 0; i <= 30; i++) {
    // O "+=" é igual a: count = count + i. Ele irá receber ele mesmo mais o que estiver sendo passado.
    count += i + '<br/>';

    
}
document.querySelector('#loopFor').innerHTML = count;
// 


// Cirando uma lista com o LOOP FOR ARRAY:
let games = ['Hogwarts Legacy', 'Elden Ring', 'Lost Ark', 'Ghostwire Tokyo'];
let listGames = '<ul>';

// O for irá percorrer o array "games" e irá preencher a variável "i" com o valor do array, começando do 0 até o total de valores que tiver declarado no array.
for(let i in games) {
    listGames += '<li>' + games[i] + '</li>';
}

listGames += '</ul>';

document.querySelector('#loopForArray').innerHTML = listGames;
// 


// LOOP WHILE
let c = 0;
let total = '';
while(c <= 10) {
    total += c + '<br/>';    
    c++;
}

// Pode ser percorrido enquanto uma variável boolean for verdadeira
c = 0;
let condicao = true;
while(condicao) {
    total += 'Verdadeiro: ' + c + '<br/>';
    
    if (c == 10) {
        total += 'Falso - Fim';
        condicao = false;
    }    
    c++
}
document.querySelector('#loopWhile').innerHTML = total;