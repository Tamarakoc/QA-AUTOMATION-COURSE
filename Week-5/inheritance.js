class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }

  eat() {
    console.log(`${this.name} is eating now!`);
  }
  introduce() {
    console.log(
      `This animal's name is ${this.name} and it's ${this.age} years old.`,
    );
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call parent class constructor
    this.breed = breed;
  }
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Keke", 3, "Blue Heeler");
dog.sleep();
dog.eat();
dog.introduce();
dog.bark();
