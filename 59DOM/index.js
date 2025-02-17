// DOM = Document Object Model
// Object that represents the page you see in the web browser and 
// provides you with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document
// and structures all the elements in a tree like representation
// JS can access the DOM to dynamically change the content, structure, and style of a webpage

// you can access the document as if it was an object because it is
document.title = "Deez Nuts"
document.body.style.backgroundColor = "black"
console.log(document)
//will list all properties of the object 
console.dir(document)