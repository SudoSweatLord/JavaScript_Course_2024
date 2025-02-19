// class List  = Element property in JS is used to interact
// with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements
// across your webpage
// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
myH1.classList.add("enabled");
myButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");
myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "new";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
