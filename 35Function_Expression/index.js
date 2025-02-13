//function declaration = define a reusable block of code

//function expressions = a way to define functions as values or variables

// const hello = function () {
//   console.log("hello");
// };

// hello();

// setTimeout(hello, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);

// function square(element) {
//   return Math.pow(element, 2);
// }
//smoother option to write:
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(cubes);

const evenNumbers = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNumbers = numbers.filter(function (element) {
  return element % 2 !== 0;
});

const sumNumbers = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sumNumbers);
console.log(oddNumbers);
console.log(evenNumbers);
