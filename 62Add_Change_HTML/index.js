// Example 1
// 1.Create the element
const newH1 = document.createElement("h1");
// 2. Add attributes/ properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";
// 3. Append element to DOM
// document.body.prepend(newH1)
// document.body.prepend(newH1)
// document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
// document.getElementById("box1").append(newH1)
// 4.
