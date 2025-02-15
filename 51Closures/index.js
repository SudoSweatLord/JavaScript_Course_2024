// closure = A function defined inside another function,
// the inner function has access to hte variables and scope of the outer function
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

// function outer() {
//     let message = "deez";
//     function inner() {
//       console.log(message);
//     }
//     inner();
//   }
//   message = "nuts";
//   outer();
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }
  function getCount() {
    return count;
  }
  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);
