/*
1. Funcao sem retorno.

function withoutReturn(): void {
  console.log('Essa funcao nao tem retorno'); 
}

withoutReturn(); // Essa funcao nao tem retorno



2. Callback sem argumento.

function greeting(name: string) {
  console.log(`Bem vindo ${name}`);
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log(`Preparando a funcao`);

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, 'daniel');



3. Generic functions.

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, true]));
console.log(firstElement(['daniel', 4, false]));



4. Constraint em generic functions.


*/

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if(+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(1, 3));
console.log(biggestNumber('6', '3'));
// console.log(biggestNumber('6', 3));
