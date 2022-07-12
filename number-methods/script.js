let num = 10;
let numF = 14.675388;
let numS = '55';
let numSF = '36.77577';

// toString() = Convert a number to string
let res = num.toString();

// toFixed(X) = Change the number of decimal places
res = numF.toFixed(2);

// parseInt(X) = Convert a string to an int number
res = parseInt(numS);

// parseFloat(X) = Convert a string to a float, keeping the decimal places.
res = parseFloat(numSF);

console.log(res);