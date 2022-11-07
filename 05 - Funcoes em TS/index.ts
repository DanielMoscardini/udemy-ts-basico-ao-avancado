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



5. Generic com tipo de argumento.

function mergeArrays<T> (arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ['testando', 'teste']));




6. Unknown

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else {
    console.log(x);
  }
}

doSomething([1, 2, 3]);
doSomething(3);



7. Tipo Never.

function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

showErrorMessage('Algum erro!');



8. Rest Operator.

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(123, 3214, 324234, 43242, 43242));




9. Destructuring com TS

function showProductDetails({ name, price }: {name: string, price: number}): string {
  return `O nome do produto é ${name} e o preco é ${price}`;
}

console.log(showProductDetails({name: 'arroz', price: 5}));

*/



