
const items = [1, 3, 2, 3];

/*
output
{
  1: 1,
  3: 2,
  2: 1,
}
*/

const rta1 = items.reduce((obj, item) => {
  // si existe ese elemento
  if(!obj[item]) {
    obj[item] = 1
  } else {
    obj[item] = obj[item] + 1
  }

  return obj;
}, {})

console.log('rta 1',rta1);


const data = [
  {
    name: 'Nicolas',
    level: 'slow'
  },
  {
    name: 'Andrea',
    level: 'medium'
  },
  {
    name: 'Zulema',
    level: 'hight'
  },
  {
    name: 'Santiago',
    level: 'slow'
  },
  {
    name: 'Valentina',
    level: 'medium'
  },
  {
    name: 'Lucia',
    level: 'hight'
  },
];

// forma 1
const rta2 = data.reduce((obj, item) => {
  // si existe ese elemento
  if(!obj[item.level]) {
    obj[item.level] = 1
  } else {
    obj[item.level] = obj[item.level] + 1
  }

  return obj;
}, {})
console.log('rta 2', rta2);


// forma 2
const rta3 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    // si existe ese elemento
    if(!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] = obj[item] + 1
    }
    
    return obj;
  }, {})
console.log('rta 3', rta3);