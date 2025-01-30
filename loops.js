//for loop iterating over an array
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let idx = 0; idx < numbers.length; idx++) {
  console.log(numbers[idx]);
}

//while loop execute same block of code whilst a condition is true
let idx = 0;
while (idx < numbers.length) {
  console.log(numbers[idx]);
  idx++;
}

//break can be used in while and for loops

let sum = 0;
while (true) {
  console.log("Loop");
  sum++;
  if (sum === 6) break;
}
// do while loop is executed at least once
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);

// for in loop primary use case is to loop over objects and access their values
const course = {
  name: "JavaScript for Beginners",
  duration: 3,
  sections: 7,
};
//instead of:
//console.log(course.name);
//console.log(course["duration"])
//console.log(course.sections)
for (const key in course) {
  console.log(course[key]);
}
//example 2
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  isAdmin: false,
};

for (let key in user) {
  if (typeof user[key] === "string") {
    console.log(`${key}: ${user[key].toUpperCase()}`);
  }
}

//for of loop: Used for iterating over an array. Used instead of the for loop When you don't use the index that you're currently iterating on
let numbers1 = [1, 2, 3, 4, 5];
for (let element of numbers1) {
  console.log(element);
}

let i = 0;
do {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
} while (i < 10);

//Breakdown
// 1. for Loop

//     Use Case: When you need precise control over iteration, such as:

//         Accessing indices.

//         Custom iteration logic (e.g., reverse iteration, skipping elements).

//     Example:
//     javascript
//     Copy

//     for (let i = 0; i < 5; i++) {
//       console.log(i); // 0, 1, 2, 3, 4
//     }

// 2. for...of Loop

//     Use Case: Iterating over iterable objects (arrays, strings, maps, sets) when you only need the values.

//     Example:
//     javascript
//     Copy

//     const arr = [1, 2, 3];
//     for (const value of arr) {
//       console.log(value); // 1, 2, 3
//     }

// 3. for...in Loop

//     Use Case: Iterating over enumerable properties of an object (keys).

//     Example:
//     javascript
//     Copy

//     const obj = { a: 1, b: 2 };
//     for (const key in obj) {
//       console.log(key); // a, b
//     }

// 4. while Loop

//     Use Case: When you want to repeat a block of code while a condition is true, and the number of iterations is unknown.

//     Example:
//     javascript
//     Copy

//     let i = 0;
//     while (i < 3) {
//       console.log(i); // 0, 1, 2
//       i++;
//     }

// 5. do...while Loop

//     Use Case: Similar to while, but guarantees at least one execution of the loop body, even if the condition is false.

//     Example:
//     javascript
//     Copy

//     let i = 0;
//     do {
//       console.log(i); // 0
//     } while (i > 0);

// 6. forEach (Array Method)

//     Use Case: Iterating over arrays when you want to perform an action on each element without manually managing indices.

//     Example:
//     javascript
//     Copy

//     const arr = [1, 2, 3];
//     arr.forEach((value) => {
//       console.log(value); // 1, 2, 3
//     });

// 7. map (Array Method)

//     Use Case: Transforming an array by applying a function to each element and returning a new array.

//     Example:
//     javascript
//     Copy

//     const arr = [1, 2, 3];
//     const doubled = arr.map((value) => value * 2);
//     console.log(doubled); // [2, 4, 6]

// 8. reduce (Array Method)

//     Use Case: Accumulating values in an array into a single result (e.g., summing numbers).

//     Example:
//     javascript
//     Copy

//     const arr = [1, 2, 3];
//     const sum = arr.reduce((acc, value) => acc + value, 0);
//     console.log(sum); // 6

// Summary Table
// Loop/Method	Use Case
// for	Precise control, custom logic, accessing indices.
// for...of	Iterating over iterables (arrays, strings, maps, sets) for values.
// for...in	Iterating over object keys.
// while	Repeating while a condition is true (unknown iterations).
// do...while	Same as while, but executes at least once.
// forEach	Iterating over arrays without indices.
// map	Transforming arrays into new arrays.
// reduce	Accumulating array values into a single result.//
