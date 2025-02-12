// callback = a function that is passed as an argument to another function
//used to handle asynchronous operations :
//1. Reading a file
//2. Network requests
//3. Interacting with databases

// hello(goodbye);
// function hello(callback){
//     console.log("Hello!")
//     callback()
// }

// function goodbye(){
//     console.log("Hello!")
// }

sum(displayConsole, 1, 2);
sum(displayPage, 3, 4);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
