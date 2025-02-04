// let age = 25;
// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else {
//   console.log("you must be 18 to enter this site");
// }
// let time = 9;

// if (time < 12) {
//   console.log("good morning");
// } else {
//   console.log("good afternoon");
// }

// let isStudent = false;

// if (isStudent){
//     console.log("You are a student")
// }else{
//     console.log("You are not a student")
// }

// let age = 25;
// let hasLicense = false;

// if (age >= 16) {
//   console.log("You are old enough to drive");
//   if (hasLicense) {
//     console.log("You have your license");
//   } else {
//     console.log("You do not have your license yet");
//   }
// } else {
//   console.log("You must be 16+ to have a license");
// }
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function (){
 age = myText.value
 age = Number(age)
if (age >= 18) {
  resultElement.textContent = "You are old enough to enter this site";
} else {
    resultElement.textContent = "You must be 18 plus to enter this site";
}}