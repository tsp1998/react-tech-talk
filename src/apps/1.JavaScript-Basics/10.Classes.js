function User() {
  this.name = '';
  this.age = null;
  this.role = '';
}

User.prototype.setUser = function (name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

User.prototype.getUser = function () {
  return this;
}

const user = new User();
user.setUser('Shubham', 23, 'Developer');
console.log('user', user);
console.log('user', user.getUser());



// -------------ES6 CLASSES----------------

class Product {
  constructor() {
    this.name = '';
    this.price = null;
    this.description = '';
  }

  setProduct(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  getProduct() {
    return this;
  }
}

const product = new Product();
product.setProduct('Ice Cream', 50, 'Ice Cream is good...');
console.log('product', product)
console.log('product', product.getProduct())

console.log('product.name', product.name)