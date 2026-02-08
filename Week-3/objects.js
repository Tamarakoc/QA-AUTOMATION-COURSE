// looping over object

const person = {
  name: "Tamara",
  age: 38,
  isStudent: true,
  greet: function () {
    console.log("Hello, my name is Tamara");
  },
  bye() {
    console.log("I am Tamara, bye");
  },
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 2. "in" keyword - checks if a key exists

console.log("name" in person);
console.log("weight" in person);

//3. Accessing object values

console.log(person.name);
console.log(person.age);

// 4. adding and updating properties

person.height = 170;
console.log(person);

person.age = 40;
console.log(person);

//5. removing value - "delete" keyword

delete person.height;
console.log(person);

//6. Methods insude Object (Object Methods)

person.greet();
person.bye();

//7. Using "this" keyword

const car = {
  brand: "Tesla",
  speed: 120,
  message() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};

car.brand;
car.speed;

car.message();

// Build in Object Methods Object.keys, Object.values, Object.ntries

const Player = {
  name: "ROnaldo",
  age: 41,
  country: "Portugal",
};

console.log(Object.keys(Player));
console.log(Object.values(Player));
console.log(Object.entries(Player));

let myMovie = {
  title: "godfather",
  year: 1990,
  actors: ["brando", "pacino"],
  movieTitle() {
    return `The movie name is ${this.title}`;
  },
};

console.log(myMovie.movieTitle());
