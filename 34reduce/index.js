//reduces the elements of an array to a single value
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

function sum(previous, next) {
  return previous + next;
}
// const total = prices.reduce((prev, next) => prev + next, 0);

//the .toFixed(n) formats a number to a fixed number of decimal places
console.log(`$${total.toFixed(2)}`);

const totalNegative = prices.reduce((first, second) => first - second, 0);
console.log(`$${totalNegative.toFixed(2)}`);

const grades = [75, 50, 90, 89, 65];

const maximum = grades.reduce(getMax);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

const maximumArray = grades.reduce((one, second) => Math.max(one, second, 0));
console.log(maximumArray)