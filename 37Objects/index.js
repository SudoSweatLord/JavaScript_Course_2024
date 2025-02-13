//object = A collection of related properties and or Methods
// Can represent real world objects such as people, products, places
// objects = {key:value, function()}

const person = {
  firstName: "Felix",
  lastName: "Nuts",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hello my name is pewiepie");
  },
  eat: function () {
    console.log("I eat Hotdogs");
  },
};

const person2 = {
  firstName: "Marzia",
  lastName: "Nuts",
  age: 31,
  isEmployed: false,
};

console.log(person.firstName);
person.sayHello();
