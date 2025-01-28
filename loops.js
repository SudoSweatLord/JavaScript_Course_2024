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
