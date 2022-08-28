// Different ways to define arrow functions

// Arrow functions can't use "this."

let sum1 = (x, y) => x + y;

let sum2 = (x, y) => { 
    return x + y; 
};

// Without param
let sum3 = () => 4 + 6;

// With only one param
let getLength = name => name.length;

console.log( sum1(5, 5) );

console.log( sum2(10, 5) );

console.log( sum3() );

console.log( `Name length: ${getLength('Albus Dumbledore')}` );