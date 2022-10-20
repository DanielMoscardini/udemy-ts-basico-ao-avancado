/*
1. let e const

let name = 'Galadriel';

function sayName() {
  const name = 'Gandalf';
  console.log(name);
}

console.log(name);
sayName();
*/



/*
2. Arrow Function

const sum = function (a, b) {
  return a + b;
}

const arrowSum = (a, b) =>  a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

*/



/*
3. Filter

const array = [1, 2, 3, 4, 5];

const newArray = array.filter((n) => {
  if (n >= 3) {
    return n;
  }
})

console.log(array);
console.log(newArray);
*/



/*
4. Map

const products = [
  { name: 'Camisa', price: 10.99, category: 'Roupas' },
  { name: 'Chaleira Eletrica', price: 49.99, category: 'Eletro' },
  { name: 'Fogao', price: 99.99, category: 'Eletro' },
  { name: 'Calca Jeans', price: 20.99, category: 'Roupas' }
]

products.map((product) => {
  if (product.category === 'Roupas') {
    product.onsale = true;
  }
})

console.log(products);
*/


/*
5. Destructuring

*/





