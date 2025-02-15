//getter = special method that makes a property readable
//setter = special method that makes a property writable

//validate and mo

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     }
//     console.error("Width must be a positive number");
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     }
//     console.error("Height must be a positive number");
//   }

//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }
//   get area() {
//     return (this._this.width * this._height).toFixed(1);
//   }
// }

// const rectangle = new Rectangle(3, 5);
// rectangle.width = 1;
// rectangle.height = 2;
// console.log(rectangle.width);
// console.log(rectangle.height);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }
}

const person = new Person(420, 69, "burger");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
