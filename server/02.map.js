
const letters = ['a', 'b', 'c'];

// usando un for tradicional
// const newArray =  [];
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   newArray.push(element + '++');
// }
// console.log('Array Original', letters)
// console.log('Array New', newArray)

// usando .map
newArray =  letters.map( item => item + '++')
console.log('Array Original', letters)
console.log('Array New', newArray)