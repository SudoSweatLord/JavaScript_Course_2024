// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographical order, not alphabetical
// lexicographic = (alphabet +  number + symbol) as strings

// let numbers = [1, 10, 2, 9, 3, 8];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 20, gpa: 2.0 },
  { name: "Sandy", age: 22, gpa: 2.2 },
];
people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.gpa - b.gpa);

console.log(people);
