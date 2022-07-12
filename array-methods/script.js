let house = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

// toString() = Convert array values to a string
let res = house.toString();

// join() = Convert array values to a string with a separator
res = house.join(' | ');

// indexOf(X) = Return the index of an element. If not found will return -1
res = house.indexOf(' Hufflepuff');

// pop() = Remove the last element from the array
house.pop();
// shift() = Remove the first element from the array
house.shift();
res = house;

// push() = Add a new element to the array
house.push('House Cup');

console.log(res);