"use strict";
/*
1. Interface como parametro.

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preco é ${product.price}`);

  if (product.isAvailable) {
    console.log('O produto está disponivel');
  } else {
    console.log('O produto nao está disponivel.');
  }
}

const shirt: Product = {
  name: "Camiseta",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt);



2. Propriedades opcionais em interface.

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario tem o email ${user.email}`);

  if (user.role) {
    console.log(`A funcao do usuario é ${user.role}`);
  }
}

let u1: User = { email: "u1@gmail.com" };

let u2: User = { email: "u2@gmail.com", role: 'Admin' };

showUserDetails(u1);
showUserDetails(u2);



3. Propriedades readonly.

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

// fusca.wheels = 5;
console.log(fusca);



4. Index Signature.

interface CoordObject {
  [index: string]: number;
}

let coords1: CoordObject = { x: 10 };
// let coords2: CoordObject = { x: '10' };

coords1.y = 15;
console.log(coords1);



5. Heranca de Interfaces (Extending Types).

interface Human {
  name: string;
  age: number;
}

interface Istar extends Human {
  spells: string[];
}

const aragorn: Human = {
  name: 'Aragorn',
  age: 89
}

const gandalf: Istar = {
  name: 'Mithrandir',
  age: 4000,
  spells: ['Servant of the Secret Fire']
}

console.log(aragorn);
console.log(gandalf);



6. Intersection Types.

interface Character {
  name: string;
}

interface Weapon {
  type: string;
  durability: number;
}

type HumanWithGun = Character & Weapon;

const aragorn: HumanWithGun = {
  name: 'Aragorn',
  type: 'Sword',
  durability: 99
}

console.log(aragorn);




7. ArrayReadOnly.

let myArray: ReadonlyArray<string> = ['Galadriel', 'Elrond', 'Cirdan'];
console.log(myArray);

// myArray[3] = 'Legolas';

myArray = myArray.map((item) => {
  return `Elfo: ${item}`;
})

console.log(myArray);



8. Tupla.

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
myNumberArray[0] = 10;
// const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5, 6];
console.log(myNumberArray);



9. Tupla com readonly.

function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10;
  console.log(numbers);
}

showNumbers([1, 2]);
*/
