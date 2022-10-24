"use strict";
/*
1. array

let numbers: number[] = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// numbers.push('teste'); // Argument of type 'string' is not assignable to parameter of type 'number'.



2. array com outra sintaxe

let numbers: Array<number> = [1, 2, 3]
numbers.push(4);
console.log(numbers);



3 tipo any.

const arr: any = [1, 2, 3, 'teste', {nome: 'Daniel'}];
console.log(arr); // [1, 2, 3, 'teste', {…}]



4. tipo de parametro de funcao

function sum(n1: number, n2: number) {
  return n1 + n2;
}
console.log(sum(4, 5));
// console.log(sum(4, 'teste'));



5. tipo de retorno de funcao

function sum(n1: number, n2: number): number {
  // return 'Hello'
  return n1 + n2;
}




6. Funcoes anonimas

setTimeout(function() {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary));
  console.log(sallary);
}, 2000)



7. Tipos de objetos.

function passCoordinates(coord: {x: number, y: number}) {
  console.log(`X coordinates: ${coord.x}`);
  console.log(`Y coordinates: ${coord.y}`);
}

passCoordinates({x: 10, y: 15})
// passCoordinates({x: 10, y: 'teste'})



8. propriedades opcionais.

function showNumbers(a: number, b: number, c?: number) {
  console.log(`
    A: ${a}
    B: ${b}
    C: ${c}
  `);
}

showNumbers(1, 2, 3);
showNumbers(1, 2);



9. validando propriedades opcionais.

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Ola ${firstName} ${lastName}, tudo bem?`;
  }

  return `Ola ${firstName}, tudo bem?`;
}

console.log(advancedGreeting('Daniel'));
console.log(advancedGreeting('Daniel', 'Moscardini'));



10. Union Type.

function showBalance(balance: number | string) {
  console.log(`O saldo da conta é de: ${balance}`);
}

showBalance(10);
showBalance('10');

let arr: (number | string)[] = ["Daniel", 1];
console.log(arr);



11. Avancando no Union Type

function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuario nao aprovado!';
  }

  return `A funcao do usuario é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole('Admin'));



12. Type Alias

type ID = string | number;

function showId(id: ID) {
  console.log(`O id é: ${id}`);
}

showId(1);
showId('100');




13. Introducao a Interfaces

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}  -  Y: ${obj.y}  -  Z: ${obj.z}`);
}

showCoords({x: 10, y: 50, z: 40});



14. Literal Types.

type direction = 'left' | 'right' | 'center'

function showDirection(dir: direction ) {
  console.log(`Direction: ${dir}`);
}

showDirection('left');
// showDirection('up');



15. Non-null Assertion Operator.

const p = document.getElementById('some-p');
console.log(p!.innerText);



16. bigint

let n: bigint;
n = 1000n;
console.log(n);



17. symbol

let symbolA: symbol = Symbol('a');
let symbolB: symbol = Symbol('a');

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
*/
