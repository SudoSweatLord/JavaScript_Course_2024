//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array
// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFood(...foods) {
//   return foods;
// }
// const food1 = "pizza";
// const food2 = "nuts";
// const food3 = "salad";
// const food4 = "tofu";

// openFridge(food1, food2, food3, food4)
// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// // const total = sum(1);
// console.log(`Your total is $${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const total = getAverage(75, 100, 50,90)

function combineString(...strings) {
  return strings.join(" ");
}
const fullName = combineString("Mr.", "Sponge", "Last");
console.log(fullName)