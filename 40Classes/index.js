// class = (ES6 feature) provides a more structured and clearer way to work with objects compared to traditional constructor functionality

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
}
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5)
product1.displayProduct();
product2.displayProduct();

