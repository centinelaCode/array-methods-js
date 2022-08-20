

const letters = ['a', 'b', 'c'];

// usando un for tradicional
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element)
}

letters.forEach(letter => console.log('forEach',letter))