//array = a variable like structure that can hold more than one value
let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";
// fruits.push("coconut")
// fruits.pop()
// fruits.unshift("mango")
// fruits.shift()

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
console.log(index);
console.log(numOfFruits);

//looping through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//enhanced loop
for (let fruit of fruits) {
  console.log(fruit);
} // "fruit" could've been called anything, for readability singular form of the array is preferred 

// sorting them alphabetically 
fruits.sort();
//sorting them reverse alphabetically
fruits.sort().reverse();