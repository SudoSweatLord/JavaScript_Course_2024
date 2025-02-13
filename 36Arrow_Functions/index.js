//arrow functions = concise way to write function expressions good for simple functions that you use only once 
// (parameters) => some code




// function hello() {
//   console.log("hello");
// }
// const hello = function () {
//   console.log("Hello");
// };

// const hello = (name) => console.log(`Hello ${name}`);
// hello("Bro")

// const hello = (name, age) => {console.log(`Hello ${name}`)
// console.log(`You are ${age} years old`)}

// hello("Bro", 3)

// setTimeout(cancelIdleCallback, 4000);

// function hello() {
//   console.log("Hello");
// }

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));

const cubes = numbers.map((element) => Math.pow(element, 3));

const evenNumbers = numbers.filter((element)=> element % 2 ===0)
const oddNumbers = numbers.filter((element)=> element % 2 !==0)

console.log(oddNumbers)
console.log(evenNumbers)
console.log(squares);
console.log(cubes);
