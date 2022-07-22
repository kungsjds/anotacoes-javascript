let person = {
    name: 'Alvo' ,
    lastname: 'Dumbledore',
    age: 116,
    info: {
        voc:  'Wizard',
        power: 9999
    },
    fullName: function() {
        return `${this.name} ${this.lastname}`;
    }
};

let { name:firstName, lastname, age = 0} = person;

console.log(firstName, lastname, age);