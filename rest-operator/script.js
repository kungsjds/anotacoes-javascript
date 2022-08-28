function add(names, ...newNames) {

    let allNames = [...names, ...newNames];

    return allNames;

};

let names = ['Albus', 'Harry'];

let others = add(names, 'Hermione', 'Rony', 'Minerva');

console.log(others);