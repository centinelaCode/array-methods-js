# Manipulando Arrays en JavaScript

## foreach
Ciclo especializado en hacer un recorrido por elemenos de una array.

**Sintaxis**
~~~
  arr.forEach(function callback(currentValue, index, array) {
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