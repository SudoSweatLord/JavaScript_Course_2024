//example
const result1 = "test" === "test" ? true : false;

//example 2
let points = 110;
const customerType = points > 100 ? "gold" : "silver";
//Output: "gold"
let a = null;
const result2 = (a !== null && a !== undefined) ? a:false;

//shorter: returns a if its not null or undefined
const result3 = a ?? false
console.log(result2, result3)