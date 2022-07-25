// Array
let cake = ['milk', 'chocolate', 'egg', 'wheat'];

// Returns the index as an array
console.log( Object.keys(cake) );

// Returns the values as an array. It's like: console.log( cake );
console.log( Object.values(cake) );

// Returns each index and value as an array. It will be like: [ ['0','milk], ['1', 'chocolate'] ...];
console.log( Object.entries(cake) );

// -----------------------------------------------------------------------------------------------------------------

// Object
let player = {
    name: 'Violetpurple',
    class: 'Sorceress',
    ilvl: 540
};

// Returns the name of the object's attributes, like: name, class and ilvl.
console.log( Object.keys(player) );

// Returns the value of the object's attributes.
console.log( Object.values(player) );

// Returns each name and value of the object's attributes as an array. It will be like: [ ['name', 'Violetpurple'], ['class', 'Sorceress'], ['ilvl', '540'] ]
console.log( Object.entries(player) );
