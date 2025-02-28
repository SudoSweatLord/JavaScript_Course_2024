//.map() = accepts a callback and applies that function to each element of an array, then returning the new array

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }
// console.log(numbers);
// console.log(squares);
// console.log(cubes);

// const students = ["Spongebob", "Patrick", "Elvis", "Deez"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase)
// function upperCase(element) {
//   return element.toUpperCase();
// }

// function lowerCase(element) {
//   return element.toLowerCase();
// }

// console.log(studentsUpper)
// console.log(studentsLower)

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(formattedDates)