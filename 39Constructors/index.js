// A method is a function that belongs to a n object

// constructor = special method for defining the methods of objects

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}
//when called with the "new" keyword it creates a new object
//JS engine will automatically set the context this. to the new object
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Volkswagen", "Golf", 1955, "brown");
const car3 = new Car("Dodge", "Dodger", 1999, "green");
console.log(car1);
car1.drive();
