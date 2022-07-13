let house = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

// toString() = Convert array values to a string
let res = house.toString();

// join(X) = Convert array values to a string with a separator
res = house.join(' | ');

// indexOf(X) = Return the index of an element. If not found will return -1
res = house.indexOf(' Hufflepuff');

// pop() = Remove the last element from the array
house.pop();
// // shift() = Remove the first element from the array
house.shift();
// res = house;

// push() = Add a new element to the array
house.push('House Cup');

// splice(x,x) = Romove an element at position X, X number of elements to exclude. Ex: position 1, 3 elements
house.splice(1, 3);
res = house;

// concat() = Concat values like 'ex1' + 'ex2' = ex1ex2. In this case it will concat two arrays.
let spells = ['Stupefy', 'Avada Kedavra', 'Expecto Patronum'];
res = house.concat(spells);
house = house.concat(spells);

// sort() = Sort the elements in alphabetical order
house.sort();

// revert() = Reverse the order of elements
house.reverse();
res = house;

console.log(res);