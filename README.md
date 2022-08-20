# Manipulando Arrays en JavaScript

## 1. foreach
Ciclo especializado en hacer un recorrido por elemenos de una array.

**Sintaxis**
~~~
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