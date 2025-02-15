const fruits = [
    { name: "apple", color: "red", calories: 99 },
    { name: "orange", color: "orange", calories: 43 },
    { name: "pear", color: "green", calories: 69 },
    { name: "banana", color: "yellow", calories: 199 },
    { name: "strawberry", color: "red", calories: 42 },
  ];
  
  // console.log(fruits[4].calories)
  
  fruits.push({ name: "grapes", color: "purple", calories: 62 });
  console.log(fruits);
  
  fruits.forEach((fruit) => console.log(fruit.name));
  
  const fruitNames = fruits.map((fruit) => fruit.name);
  console.log(fruitNames);
  
  
  const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
  console.log("Yellow fruits:", yellowFruits);
  
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  console.log("Low calorie fruits:", lowCalFruits);
  