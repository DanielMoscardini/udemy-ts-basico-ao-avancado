/*
1 Generics.

function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData('Testando generic'));

-----------------------------------------------------------------------------------------------------------

2 Constraint em generic.

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do objeto é ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' }
const otherObj = { price: 19.99,  cor: 'Branca' }

console.log(showProductName(myObj));
// console.log(showProductName(otherObj));

-----------------------------------------------------------------------------------------------------------

3 Interfaces com Generics.

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen: Pen = { name: "BIC", wheels: false, engine: false, color: "Azul" };

console.log(myCar);
console.log(myPen);

-----------------------------------------------------------------------------------------------------------

4. Type Params.

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} existe no objeto, e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));
// A chave ram existe no objeto, e tem o valor de 32GB

-----------------------------------------------------------------------------------------------------------

5. keyof Type Operator.

type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj.name}`;
}

const myChar: Character = {
  name: 'Daniel',
  age: 21,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, 'name')); // Daniel

-----------------------------------------------------------------------------------------------------------

6. typeof Type Operator

const userName: string = 'Daniel';
const userName2: typeof userName = 'Maria Laura';

console.log(typeof userName, typeof userName2); // string string

-----------------------------------------------------------------------------------------------------------

7. Indexed Access types

type Truck = {
  km: number;
  kg: number;
  description: string;
};

type Km = Truck['km'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhao para pouca carga',
};

function showKm(km: Km) {
  console.log(`O veiculo tem a km de ${km}`);
}

showKm(newTruck.km); // O veiculo tem a km de 10000

-----------------------------------------------------------------------------------------------------------

8. Conditional Expression Type.

interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2: myType = '5';

*/
