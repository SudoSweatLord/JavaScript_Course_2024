function calculateArea(length, width) {
    return length * width;
  }

function calculateVolume(length, width, height) {
    function calculateArea(length, width) {
        return length * width;
      }
  const area = calculateArea(length, width);
  
  return area * height;
  
}

console.log(calculateVolume(2, 3, 4)); // Output: 24

function greetUser(name) {
  const userName = name ?? "Guest"; // Use "Guest" if `name` is null or undefined
  console.log(`Hello, ${userName}!`);
}

greetUser("Alice");  // Output: Hello, Alice!
greetUser(null);     // Output: Hello, Guest!
greetUser(undefined); // Output: Hello, Guest!
greetUser("");       // Output: Hello, !
