let city = "Tbilisi";
let temperature = 30;
let isRaining = false;

console.log(city, temperature, isRaining);

console.log("---------------------");

let score = 60;

console.log(score > 50);

console.log(score >= 40 && score <= 100);

if (score >= 40 && score <= 100) {
  console.log("Score is between 40 and 100");
} else {
  console.log("Score is NOT between 40 and 100");
}

console.log("---------------------");

const age = 38;

if (age >= 18) {
  console.log("Too young");
} else {
  console.log("Allowed");
}

console.log("---------------------");

let num = 6;

num % 2 === 0 ? console.log("Even") : console.log("Odd");

console.log("---------------------");

function multiply(a, b) {
  return a * b;
}

multiply(5, 2);
console.log(multiply(5, 2));

console.log("---------------------");

let colors = ["Yellow", "Blue", "Red", "Green", "Purple"];
console.log(colors.length);
console.log(colors[2]);
console.log(colors.pop());

console.log("---------------------");

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("---------------------");

let a = [7, 8, 9, 10, 15, 22];

for (let i = 0; i < a.length; i++) {
  if (a[i] > 10) {
    console.log(a[i]);
  }
}

console.log("---------------------");

let car = {
  brand: "Toyota",
  year: "2026",
  color: "Olive",
};
console.log(car.brand);

console.log("---------------------");

if (car.year > 2015) {
  console.log("New car");
} else {
  console.log("Old car");
}

console.log("---------------------");

let m = -1;
function logic(m) {
  if (m > 0) {
    console.log("Positive");
  } else if (m < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

logic(m);

console.log("---------------------");

const me = {
  lastName: "Koch",
  age: 38,
  occupation: "student",
};
const property = Object.entries(me);
console.log(property);
for (const [key, value] of property) {
  console.log(`key ${key}, value ${value}`);
}

// object entries - გამოაქვს ერეი

console.log("---------------------");

let b = [10, 5, 2, -6];

function challene(b) {
  let result = 0;
  for (let element of b) {
    if (element > 0) {
      result = result + element;
    }
  }
  return result;
}
console.log(challene(b));
