//destructuring = extract values form arrays and objects,
// then assign them to variables in a convening way
// [] = to perform array destructuring
// {} = to perform object destructuring

// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}
displayPerson(person2);
