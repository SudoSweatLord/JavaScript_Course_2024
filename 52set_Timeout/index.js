// setTimeout() = function in JavaScript that allows you to schedule
// the execution of the function after an amount of time (ms)
// setTimeout(callback, delay)

function sayHello() {
  window.alert("Hello");
}

let timeoutId;
function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Started");
}
function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Cleared");
}
