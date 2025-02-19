//element selectors = Methods to target and manipulate HTML elements.
//They allow you to select one or multiple HTML elements
//from the DOM
//Method () what they return
// document.getElementById() Element or Null
// document.getElementsByClassName() HTML Collection(array like list of elements)
// document.getElementsByTagName() HTML Collection
// document.querySelector() Element or Null
// document.querySelectorAll() Nodelist(similar to an array)

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");
// console.log("fruits");
// fruits[0].style.backgroundColor = "red";

//If wanting to iterate over all these elements you can

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "green";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// console.log(h4Elements)
// h4Elements[0].style.backgroundColor = "yellow"

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow"
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "green"
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "blue";
// });

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "blue";
// });

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "blue";
// });
// //you can selects the first matching element or null
// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "orange";

// console.log(element);

const foods = document.querySelectorAll("li")
foods[1].style.backgroundColor = "blue"
