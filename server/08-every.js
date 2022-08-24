const numbers = [1, 30, 39, 29, 10, 13];

// existe al menos un numeor par
let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element >= 40) {
    rta = false
    break;
  }
}
console.log('for', rta)

const rta2 = numbers.every( item => item <= 40);
console.log('rta', rta2);



const team = [
  {
    name: 'Nicola',
    age: 12,
  },
  {
    name: 'Raul',
    age: 8,
  },
  {
    name: 'Mario',
    age: 2,
  },
  {
    name: 'Juan',
    age: 18,
  },
]

const team15 = team
  .map(item => item.age)
  .every(item => item <= 15)

console.log(team15)