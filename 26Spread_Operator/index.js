//spread operator = ... allows an iterable such as a string or array to be separated into elements(unpacked)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(numbers);

let x = "deez";
let characters = [...x];
console.log(characters);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits]
let vegetables = ["carrot", "celery", "potatoes"]
let foods = [...fruits, ...vegetables]
console.log(foods);
