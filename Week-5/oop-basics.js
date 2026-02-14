// Example 1

class Person {
  constructor(name, age) {
    // object builder
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const alice = new Person("Alice", 25); // intance of the class, creating object

alice.greet();
console.log(alice);

const bob = new Person("Bob", 30);
bob.greet();
console.log(bob);

// Example 2

class Phone {
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }
  describe() {
    return `${this.greetCustomer()} This phone is a ${this.brand} ${this.model} and has a storage of ${this.storage}`;
  }

  greetCustomer() {
    return "Hello customer, this is your new phone. Please Enjoy!!";
  }
}

const iPhone17 = new Phone("Apple", "iPhone 17", "512GB");
const iPhoneMessage = iPhone17.describe();
console.log(iPhoneMessage);

const samsungA16 = new Phone("Samsung", "A16", "256GB");
const SamsungMessage = samsungA16.describe();
console.log(SamsungMessage);

// Example 3
