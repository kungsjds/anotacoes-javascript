let nome = 'Jonathan Dias';

// Retorna a quantidade de caracteres, incluindo os espaços
// let resultado = nome.length;

// Retorna a posição que começa a string que for passada como parametro. Também serve para verificar se contém alguma palavra em alguma frase, etc.
// let resultado = nome.indexOf('Dias');

// Retorna os caracteres da posição 5 até o final
// let resultado = nome.slice(5);

// Retorna os caracteres da posição 5 até a posição 10
// let resultado = nome.slice(5, 10);

// Retorna o caractere contando as posições do final da string até a posição -7 e vai até a posição 13.
// let resultado = nome.slice(-7, 13);

// Retorna o mesmo resultado do slice, porém não pode utilizar posições negativas
// let resultado = nome.substring(7, 13)

// replace() = Replace a string with a new value
let result = nome.replace('Dias', 'Souza');

result = nome.toUpperCase();
result = nome.toLowerCase();

let name2 = '             blank spaces            '

// trim() = Remove all blank spaces
result = name2.trim();
result = name2.trim().length;

// charAt() = Return a char at a position. Starting from 0 like every arrays.
result = name2.trim().charAt(4);

// This is the same as charAt. Returns a char at a position, like an array.
result = name2.trim()[4];
        //  name2[4]   


// split() = Generate an array passing a separator as a param
let ex1 = 'Harry Potter Hogwarts Legacy';
let ex2 = '1,2,3,4,5,6,7,8,9,10';
result = ex1.split(' ');
result = ex2.split(',');

console.log(result);