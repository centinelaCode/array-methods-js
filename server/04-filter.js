

const words = ['spray', 'limit', 'elite', 'exuberant']

// usando el for tradicional
const newArray =  [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if(item.length >= 6){
    newArray.push(item)
  }
}
console.log('Array Original', words)
console.log('Array New', newArray)

// usando .filter
const newArray2 = words.filter(item => item.length >= 6)
console.log('Array Original', words)
console.log('Array New', newArray2)


const orders = [
  {
    customerName: 'Nicolesa',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Nico',
    total: 240,
    delivered: true,
  },
]

// usando .filter en array de objetos
const newArray3 = orders.filter(order => order.delivered && order.total >= 100)
console.log('Array Original', orders)
console.log('Array New', newArray3)


// usan filter para hacer un buscador
const search = (query) => {
  return orders.filter(order => {
    return order.customerName.includes(query);
  })
}
console.log(search('Nico'));