// eventListener = Listen for specific events
// .addEventListener(event, callback, anonymous function, arrow function)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Ouch";
});

myButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont't do it";
});

myButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click";
});
