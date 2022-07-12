// Em um array, pode conter vários tipos de dados, incluindo function. Como no exemplo2 abaixo

let exemplo = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];

// Array com function. Na function dentro do array, não se da um nome para ela, apenas coloca a execução.
// A estrutura é a mesma, é apenas para melhorar a visibilidade e leitura.
let exemplo2 = [
    'Gryffindor',
    'Hufflepuff',
    'Slytherin',
    'Ravenclaw',
    function () {
        console.log('Taça das casas');
    }
]

exemplo2[4]();
// Para executar uma function na array, deve ser declarado dessa forma, com o () no final.


// É possível encontrar Array declarado dessa maneira, pois só existia essa forma. 
// Mas hoje em dia normalmente se utiliza como nos exemplos 1 e 2, que é mais simplificado.
// Mas ambos tem exatamente a mesma execução e funcionalidade.
let exemplo3 = new Array('Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw');

console.log(exemplo3);


// Array dentro de array. Pode incluir quantas array dentro de array quiser
let exemplo4 = [
    ['uva', 'pera', 'maça'],
    ['chocolate', 'amendoim']
]

console.log(exemplo4[1][0]);
// Para retornar um item de um array que está dentro de outro array. 
// O retorno sera o amendoim. O primeiro seria o array número 1 da variável exemplo4 e o segundo o array posição 0, do array de número 1 da váriavel exemplo4.