// nested objects = Objects inside other Objects
// represent more complex data structure
// child object is enclosed by a patent object

// Person{Address{}, ContactInfo{}}
// ShoppingCard{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Spongebob Squarepants",
//     age:30,
//     isStudent: true,
//     hobbies: ["karate", "cooking"],
//     address: {
//         street: "12 Pineapple St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"

//     }

// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.country)

// for(const property in person.address){
//     console.log(person.address[property])
// }

class Person {
    constructor(name, age, street, city, country = "Unknown") { 
      this.name = name;
      this.age = age;
      this.address = new Address(street, city, country);
    }
  }
  
  class Address {
    constructor(street, city, country) {
      this.street = street;
      this.city = city;
      this.country = country;
    }
  }
  
  const person1 = new Person("Spongebob", 30, "124 Conch St.", "Int. Waters");
  const person2 = new Person("Patrick", 33, "1224 Conch St.", "Int. Waters");
  const person3 = new Person("Squidward", 20, "12224 Conch St.", "Int. Waters");
  
console.log(person2.address);
