let obiwanAttack = 25;
let anakinAttack = 35;

if (obiwanAttack < anakinAttack) {
  console.log('Ani buffer than Obi');
} else if (obiwanAttack > anakinAttack) {
  console.log('Obi buffer than Ani');
} else {
  console.log('Ani and Obi same-same');
}

let obiwanHealth = 100;
let obiwanDefense = 0;

if (obiwanHealth <= anakinAttack) {
  console.log('Obi dead');
} else {
  obiwanHealth -= anakinAttack;
  console.log(`Ani strike Obi: ${obiwanHealth}hp`);
}

obiwanDefense += 30;

for (let i = 0; i < 5; i++) {
  obiwanHealth -= anakinAttack - obiwanDefense;

  if (obiwanHealth <= 0) {
    console.log('Obi dead');
  } else {
    console.log(`Ani strike Obi: ${obiwanHealth}hp`);
  }
}

while (obiwanHealth > 0) {
  obiwanHealth -= anakinAttack - obiwanDefense;
  console.log(`Ani strike Obi: ${obiwanHealth}hp`);
  if (obiwanHealth <= 0) {
    console.log('Obi dead');
  }
}
