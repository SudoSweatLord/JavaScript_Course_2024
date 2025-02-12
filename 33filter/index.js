//.filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}
//using arrow functions
// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// let oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
