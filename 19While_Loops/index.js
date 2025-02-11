//while loop repeats code WHILE some condition is true

// let username = "";
// while (username === "") {
//   username = window.prompt(`Enter your name`);
// }
// console.log(`Hello ${username}`);

//Do while loop
let username;
console.log(username)
do {
  username = window.prompt(`Enter your name`);
} while (username === "" || username === null);

console.log(`Hello ${username}`);

