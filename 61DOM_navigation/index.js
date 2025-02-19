// DOM Navigation = The process of navigating through the structure of an HTML
// document using JS
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild

// const element = document.getElementById("fruits")
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor ="yellow"
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "orange";
// });

//lastElementChild

// const element = document.getElementById("fruits")
// const lastChild = element.lastElementChild
// lastChild.style.backgroundColor = "yellow"
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// .nextElementSibling
// const element = document.getElementById("apple")
// const nextSibling = element.nextElementSibling
// nextSibling.style.backgroundColor ="green"

// .previousElementSibling
// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

//.parentElement
// const element = document.getElementById("apple")
// const parent = element.parentElement
// parent.style.backgroundColor = "yellow"

const element = document.getElementById("fruits")
const children = element.children
// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "green"
// })

children[1].style.backgroundColor = "blue"