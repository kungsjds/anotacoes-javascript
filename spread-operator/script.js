// Concat an array
let classes = ['Wizard', 'Druid', 'Warrior'];

let allClasses = [...classes, 'Necromancer', 'Paladin', 'Archer'];

console.log(allClasses);

// ---------------------------------------------------------------------

// Concat an object
let player = {
    name: 'Kungs',
    class: 'Wizard',
    city: 'Mokoko village',
};

let playerPlus = {
    ...player,
    power: 9999,
    spells: 'Light and Shadow',
    race: 'Elf'
};

console.log(playerPlus);

// ---------------------------------------------------------------------
// Concat an object with a function
function addInfo(info) {
    let newinfo = {
        ...info,
        house: 'Gryffindor',
        status: 100,
        power: 100
    };
    return newinfo;
};

console.log(addInfo({ name: 'Albus', lastname: 'Dumbledore' }));