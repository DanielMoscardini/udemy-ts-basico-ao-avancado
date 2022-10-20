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

const fruits = ['Apple', 'Watermelon', 'Grape'];
const [f1, f2, f3] = fruits
console.log(f1, f2, f3);
*/



/*
6. Spread Operator

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [...a1, ...a2];
console.log(a3);
*/



/*
7. Classes

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product('Camiseta Polo', 70);
console.log(shirt); // Product {name: 'Camiseta Polo', price: 70}
console.log(shirt.productWithDiscount(10)); // 63
*/



/*
8. Heranca

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

class ProductWithColors extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores sao: ");
    this.colors.forEach((color) => {
      console.log(color);
    })
  }
}

const hat = new ProductWithColors('Chapeu', 49.99, ['Branco', 'Preto']);
console.log(hat.showColors());
console.log(hat.productWithDiscount(10));
*/

