/*
1 - Campos em classes.

class User {
  name!: string;
  age!: number;
}

const daniel = new User();

daniel.name = 'Daniel Moscardini';
daniel.age = 18;
// daniel.gender = 'Male';

console.log(daniel);



2 - Constructor.

class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const daniel = new NewUser('Daniel Moscardini', 18);

console.log(daniel);



3 - readonly em Classes.

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const car1 = new Car('Onix');
console.log(car1);

car1.name = 'Polo';
// car1.wheels = 6;

console.log(car1);



4 - Heranca e Super.

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine('Trator');

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine('Destroyer', 4);

console.log(trator);
console.log(destroyer);



5 - Métodos.

class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log('Speak friend and enter!');
  }
}

const dwarf1 = new Dwarf('Gimli');

console.log(dwarf1);
dwarf1.greeting();



6 - this.

class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhao do modelo: ${this.model} e tem ${this.hp} cavalos de potencia.`
    );
  }
}

const truck1 = new Truck('Volvo', 400);

truck1.showDetails();



7 -


*/
