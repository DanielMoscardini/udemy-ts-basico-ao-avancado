"use strict";
/*
1. Typeof type guard.

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma!");
  }
}

sum(1, 4); // 5
sum('1', '4'); // 5
sum(1, '4'); // Impossivel realizar a soma!



2. Checando se valor existe

function operations(arr: number[], operation?: string | number) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log("Por favor, defina uma operacao.");
  }
}

operations([1, 2, 3]) // Por favor, defina uma operacao.
operations([1, 2, 3], 'sum') // 6
operations([1, 2, 3], 'multiply') // 6



3. Operador stanceof.

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const Jhon = new User("Jhon");
const Paul = new SuperUser("Paul");

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema? `);
  } else if (user instanceof User) {
    console.log(`Ola ${user.name}`);
  }
}

userGreeting(Jhon); // Ola Jhon
userGreeting(Paul); // Olá Paul, deseja ver os dados do sistema?



4. Operador in

class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;

    if (breed) {
      this.breed = breed;
    }
  }
}

const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemao');

console.log(turca); // Dog {name: 'Turca'}
console.log(bob); // Dog {name: 'Bob', breed: 'Pastor Alemai'}

function showDogDetail(dog:Dog) {
  if ('breed' in dog) {
    console.log(`O cachorro é da raca ${dog.breed}`);
  } else {
    console.log(`O cachorro é um SRD`);
  }
}

showDogDetail(turca); // O cachorro é um SRD
showDogDetail(bob); // O cachorro é da raca Pastor Alemao
*/
function userReview(star) {
    if (typeof star === 'boolean') {
        console.log('O usuario nao deixou nenhuma avaliacao');
    }
    else {
        console.log(`O usuario avaliou com ${star} estrela(s)`);
    }
}
userReview(false);
userReview(4);
