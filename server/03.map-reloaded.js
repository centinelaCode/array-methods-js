const orders = [
  {
    customerName: 'Juan',
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
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

// tranformamos el array original con objetos de 3 propiedades a un array unicamente con una sola propiedad
// const res1 = orders.map(item => item.total)
// console.log('Original', orders)
// console.log('New', res1)


// agregando una propiedad al array (MUTANDO el array original)
// const res2 = orders.map(item => {
//   item.tax = 0.19;
//   return  item;
// })
// console.log('Original', orders)
// console.log('New', res2)


// agregando una propiedad al array sin mutar el original (usando el spread operator)
const res3 = orders.map(item => {  
  return  {
    ...item,
    tax: 0.19
  }
})
console.log('Original', orders)
console.log('New', res3)