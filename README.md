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
~~~ javascript
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
~~~ javascript
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


## 3. filter()
Es un array method que permite como su nombre lo dice 'filtrar' los elementos en un nuevo array sin mutar el array original.

**Sintaxis**
~~~javascript  
  const newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
~~~

**Example**
~~~ javascript
  const words = ['spray', 'limit', 'elite', 'exuberant']
  const newArray2 = words.filter(item => item.length >= 6)
~~~

**Example con array de objetos**
~~~ javascript
  const orders = [
  {customerName: 'Juan', total: 60, delivered: true},
  {customerName: 'Zulema', total: 120, delivered: false},
  {customerName: 'Santiago', total: 180, delivered: true},
  {customerName: 'Valentina', total: 240, delivered: true}];

  const newArrayOrders = orders.filter(order => order.delivered && order.total >= 100)
~~~


## 4. reduce()
Es un array method que permite reducir los valores de un array a un solo valor, es decir no retorna otro array como los otros array methods (al menos que sea loq ue deseamos hacer). Su principal función es hacer calculos con los elementos del array.

**Sintaxis**
~~~javascript  
  arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
~~~

**Example**
~~~ javascript
  const totals = [1, 2, 3, 4];
  // devuelve la suma de los elementos del array
  const rta = totals.reduce((sum, element) => sum + element, 10)
~~~



## 4. some()
Es un array method que permite idetificar si alguno cumple con una condicion y retorna una true o false, es decir si alguno que cumple la condicion retorna true, pero si no hay ninguno retorna false.

**Sintaxis**
~~~javascript  
  arr.some(callback(element[, index[, array]])[, thisArg])
~~~