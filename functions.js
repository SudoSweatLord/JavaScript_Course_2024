function sayHi() {
  console.log("Hi!" + name);
}
//call the function and passing the variable
sayHi("Steven");
//reusable block of code that can be called using parameters or arguments: function(parameter)

//ways to define a function:

//Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John")); // Output: Hello, John!
//Function Expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Jane")); // Output: Hello, Jane!
//Arrow Function
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!

//If theres only one parameter the parenthesis can be omitted:
const greet = (name) => `Hello, ${name}!`;
//Without parameters:
const sayHello = () => "Hello!";

// 4. Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that is executed immediately after it is defined. It is often used to create a local scope and avoid polluting the global scope.
(function () {
  console.log("This runs immediately!");
})();

//Function Parameters and Arguments
// Parameters: Variables listed in the function definition.
// Arguments: Actual values passed to the function when it is called.
function add(a, b) {
  // a and b are parameters
  return a + b;
}

console.log(add(2, 3)); // 2 and 3 are arguments; Output: 5

//default parameters can be assigned as well
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("John")); // Output: Hello, John!

//Don't understand the following paragraph at all
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

//Use a return statement to return values from a function otherwise "undefined" will be returned
function multiply(a, b) {
    return a * b;
  }
  
  console.log(multiply(2, 3)); // Output: 6

  //combining functions
  function calculateArea(length, width) {
    return length * width;
  }
  
  function calculateVolume(length, width, height) {
    const area = calculateArea(length, width);
    return area * height;
  }
  
  console.log(calculateVolume(2, 3, 4)); // Output: 24