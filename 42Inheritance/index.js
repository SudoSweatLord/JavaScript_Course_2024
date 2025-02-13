//inheritance = allows a new class to inherit properties and methods from an existing class ( parent -> child)

class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = "rabbit";
  //can have its own method
  run() {
    console.log(`this ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`this ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
