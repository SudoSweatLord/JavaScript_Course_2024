// string slicing = creating a substring from a portion of another string
// const fullName = "Bronk Code";
// let firstName = fullName.slice(0, 2);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

const email = "deez@nuts.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1)
console.log(username);
console.log(extension)