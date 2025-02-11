//function = section of reusable code.
//call the function () to execute the code
//Parameters are the names you give to the values
//Arguments are the actual values or expressions
// function happyBirthday(username, age) {
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday dear ${username}`);
//   console.log("Happy birthday to you");
//   console.log(`Ỳou are ${age} years old`);
// }

// happyBirthday("BroCode", 22);

function add(x, y) {
  let result = x + y;
  return result;
}
let answer = add(2, 3);
console.log(answer);

function subtract(x, y) {
  return x - y;
}
function isEven(number) {
  return number % 2 === 0 ? true : false;
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
function isValidEmail2(email) {
    return email.includes("@") ? true : false
}
