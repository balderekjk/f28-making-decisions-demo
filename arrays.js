let backpack = [];

// Obi pack for travail
backpack.push(
  'Jedi Robe',
  'Lightsaber',
  'Crippling sense of failure and guilt'
);

// Obi need lightsaber ready, treacherous world
backpack.splice(1, 1);

// Obi finds a Wookie Coat, perfect for the cold
backpack.push('Wookie Coat');

// Obi brrrrrr, equips Coat
backpack.pop();

// ?
backpack.push(
  'Blue Milk',
  'Baby Yoda',
  'Baby Luke',
  'Con Device',
  'High Ground',
  'Blaster'
);

// Babies crying, no more room
let stroller = backpack.splice(3, 2);

console.log(backpack);
console.log(backpack, stroller);
