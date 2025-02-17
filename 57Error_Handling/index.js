//Error = An Object that is created to represent a problem that occurs
//Occur often with user input or establishing a connection
//Use cases
//Network errors
//Promise rejector
//Security Error
// try {} = encloses code that might potentially cause an error
// catch {} = catch and handle any thrown Errors from try {}
// finally {} = (optional) Always executes. Used for clean up,
// close files, close connections, release resources

// try {
//   console.log("Hello");
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("This always executes");
// }
// console.log("you have reached the end ");

try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  if (divisor === 0) {
    throw new Error("You can't divide by 0");
  }

  const result = dividend / divisor;
  console.log(`Result: ${result}`);
} catch (error) {
  console.log(error.message);
}

console.log("You have reached the end!");
