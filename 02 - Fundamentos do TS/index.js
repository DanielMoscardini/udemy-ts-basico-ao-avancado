"use strict";
/*
1. number

let x: number = 10;
let y: number = 5.23342
console.log(x); // x
console.log(y); // y
console.log(typeof x, typeof y); // number number

// console.log(x.toUpperCase()); Property 'toUpperCase' does not exist on type 'number'.

// x = 'teste'; Type 'string' is not assignable to type 'number'



2. string

const firstName: string = 'Daniel';
const lastName: string = 'Moscardini';
let fullName: string = `${firstName} ${lastName}`
console.log(fullName); // Daniel Moscardini



3. boolean

let a: boolean = false;
console.log(a); // false
console.log(typeof a); // boolean



4. annotation e inference

const ann: string = 'Daniel';
const inf = 'Moscardini';
console.log(typeof ann); // string
console.log(typeof inf); // string

*/
let teste = 8;
let testeInString = teste.toString();
console.log(typeof teste);
console.log(typeof testeInString);
