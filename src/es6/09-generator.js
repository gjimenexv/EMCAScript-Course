/*Cómo utilizar generadores
La sintaxis de los generadores comprende lo siguiente:

La palabra reservada function* (con el asterisco al final).
La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
Crear una variable a partir de la función generadora.
El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true. */

function* iterate(array) {
    for (let value of array) {
      yield value;
    }
  }
  
  const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);