/*
Métodos privados de clases
Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.
*/

class user {
    // Constructor
    constructor() {
      console.log('Nuevo Usuario');
    }
    greeting() {
      return 'Hello';
    }
  }
  
  const david = new user();
  
  // this 
  
  class user {
    constructor(name) {
      this.name = name;
    }
    // metodos
    #speak() {
      return 'Hello';
    }
    greeting() {
      return `${this.speak()} ${this.name}`;
    }
  }
  
  const ana = new user('Ana');
  console.log(ana.greeting());
  
  // setters getters
  
  class user {
    //constructor
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // metodos
    #speak() {
      return 'Hello';
    }
    greeting() {
      return `${this.speak()} ${this.name}`;
    }
  
    get #uAge() {
      return this.age;
    }
    set uAge(n) {
      this.age = n;
    }
  }
  
  const bebeloper1 = new user('David', 15);
  console.log(bebeloper1.uAge);
  console.log(bebeloper1.uAge = 20);