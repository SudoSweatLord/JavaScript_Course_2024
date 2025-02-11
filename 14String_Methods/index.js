// string methods allow to manipulate and work with text

//charAt method returns given character indexed
let userName = "BroCode ";
userName.charAt(0);
console.log(userName.charAt(2));
//returns the index of the first occurrence
console.log(userName.indexOf("o"));
//returns the last index of given character
console.log(userName.lastIndexOf("o"));
//returns the length of given string
console.log(userName.length);
//removes whitespaces
console.log(userName.trim());
//replaces all characters with different ones
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber)
