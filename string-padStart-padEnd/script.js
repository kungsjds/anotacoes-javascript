let card = '1234567891234567';

let lastFour = card.slice(-4);
let firstFour = card.slice(0, 4);

// Set a string length and if the value doesn't have that length, fill the remaining with a string until it reaches the length 
let maskedCard = lastFour.padStart(16, '*');
let maskedFirst = firstFour.padEnd(16, '*'); 

console.log(`Card number: ${maskedCard}`);
console.log(`Card number: ${maskedFirst}`);