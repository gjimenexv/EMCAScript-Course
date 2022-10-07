/*
El método at de arrays sirve para acceder a los elementos a partir del índice.

array.at(índice)
*/


const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"];

nombres[-1]; // undefined 
nombres.at(-3); // "Ana"     
nombres[nombres.length -1]; // "Richard"

//nueva forma de hacerlo
nombres.at(-1); // "Richard"

console.log(nombres.at(-1));