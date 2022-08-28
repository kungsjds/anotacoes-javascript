// Always receives JSON in string format, like this:
let jsonEx = '{"name": "Kungs", "class": "Wizard", "power": 999}';

// JSON.parse() = Convert a string to an object(JSON).
let player = JSON.parse(jsonEx);

console.log(`Name: ${player.name}, Class: ${player.class}, Power: ${player.power}`);

// JSON.stringify() = Convert an object(JSON) to a string
let jsonString = JSON.stringify(player);

console.log(jsonString);