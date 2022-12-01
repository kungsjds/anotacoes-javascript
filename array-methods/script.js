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

let nums = [30, 5, 63, 7, 34, 57];
let nums2 = [];

// map(function(x)) = Loop through all array elements and return a value for each element.
nums2 = nums.map(function(value){
    return value * 2;
});

// filter(function(x)) = Loop through all array elements and return a value if true. If false will not set a value in the new array.
nums2 = nums.filter(function(value){
    return (value > 20)? true : false; //Simplified if else
});

// every(function(x)) = Loop through all array elements and return true or false. It will only return true if all elements are true, if one element is false it will return false.
nums2 = nums.every(function(value){
    return (value < 20)? true : false;
});

// some(function(x)) = Loop through all array elements and return true or false. If only one is true it will return true. It will only return false whether all elements are false
nums2 = nums.some(function(value){
    return (value > 30)? true : false;
});

res = nums2;

let player = [
    {id: 1, name: 'Kungs', class: 'Mage'},
    {id: 2, name: 'Harry', class: 'Wizard'},
    {id: 3, name: 'Legolas', class: 'Archer'}
];

// find(function(x)) = Return the value of the first element in the array that the condition is true
let selected = player.find(function(value){
    return (value.id == 2) ? true : false;
});

// findIndex(function(x)) = It's the same as find() but will return the value of the position
selected = player.findIndex(function(value){
    return (value.id == 3) ? true : false;
});

res = selected;

console.log(res);