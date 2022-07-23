let person = {
    name: 'Albus' ,
    lastname: 'Dumbledore',
    age: 116,
    info: {
        voc:  'Wizard',
        power: 9999,
        house: {
            name: 'Gryffindor'
        }
    },
};

// Destructuring: Declare variables by extracting the value of an object

// name:firstName = Change variable name to firstName. | age = 0 = Set a defult value if undefined.
// let { name:firstName, lastname, age = 0} = person;

// object within object
// let { voc, power } = person.info;
// console.log(`Name: ${firstName}, Last name: ${lastname}, Age: ${age}, Vocation: ${voc}, Power: ${power}`);

// -------------------------------------------------------------------------------------------------------------------------------------------------

//object within object as well
// let { name, lastname, age = 0, info: { voc, power, house: { name:housename } } } = person;

// console.log(`Name: ${name}, Last name: ${lastname}, Age: ${age}, Vocation: ${voc}, Power: ${power}, House: ${housename}`);

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Destructuring objects in function parameter
function getObject({ name, lastname, age = 0, info: { voc, power, house: { name:housename } } }) {

    return `Name: ${name}, Last name: ${lastname}, Age: ${age}, Vocation: ${voc}, Power: ${power}, House: ${housename}`;
}

console.log(getObject(person));


// -------------------------------------------------------------------------------------------------------------------------------------------------

// Destructuring arrays

let array = ['First name', 'Second name', 'Third name', 'Fourth name'];

// Always starts from 0 to array size
// let [a, b, c, d] = array;
// console.log(`${a}, ${b}, ${c}, ${d}`);

// Whether don't want to get some array value just set: ,
let [a, ,, d] = array;
console.log(`${a}, ${d}`);
