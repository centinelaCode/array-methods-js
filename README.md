# Manipulando Arrays en JavaScript

## 1. foreach()
Ciclo especializado en hacer un recorrido por elemenos de una array.

**Sintaxis**
~~~
  javascript
  // Use function
  arr.forEach(function callback(currentValue, index?, array?) {
    // tu iterador
  }[, thisArg]);

  // Use arrow function
  arr.forEach((currentValue, index?, array?) => {
    // tu iterador
  }[, thisArg]);
~~~

**Example**
~~~
  const letters = ['a', 'b', 'c']
  letters.forEach( letter => console.log(letter))
  
  a
  b
  c
~~~


## 2. map()
Es un array method que permite transformar el array creando un nuevo array, es decir no muta el array original.

**Sintaxis**
~~~
  javascript
  // Use function
  const nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
  }[, thisArg])

  // Use arrow function
  const nuevo_array = arr.map((currentValue, index, array) => {
    // Elemento devuelto de nuevo_array
  }[, thisArg])
~~~

**Example**
~~~
  const letters = ['a', 'b', 'c']
  newArray =  letters.map( item => item + '++')
  
  a++
  b++
  c++
~~~

**Example  agregando una nueva propiedad a un array de objetos**
~~~
  const orders = [
  {customerName: 'Juan', total: 60, delivered: true},
  {customerName: 'Zulema', total: 120, delivered: false},
  {customerName: 'Santiago', total: 180, delivered: true},
  {customerName: 'Valentina', total: 240, delivered: true}];
  const newArrayOrders = orders.map(item => {  
  return  {
    ...item,
    tax: 0.19
  }
})
~~~

