// super = keyword is used in classes to call the constructor or access the properties and methods of the partent (superclass)
// this = this object
// super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);

console.log(rabbit.name);
console.log(fish.age)
