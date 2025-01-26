//arrays can be created using:
const fruits0 = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3, 4, 5);
const emptyArray = [];
// it can be accessed using their index:
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'

//trying to access an index that doesn't exist it'll return undefined
console.log(fruits[3]); // Output: undefined

//Can be multidimensional
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // Output: 6 (second row, third column)


//the length of an array can be determined using array.length