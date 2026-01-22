let num1 = 20;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log("------------");

let numb1 = 20;
numb1++;
console.log(numb1);

let numb2 = 15;
numb2--;
console.log(numb2);

console.log("------------");

let numb3 = 20;
let numb4 = 10;
console.log(numb3 % numb4);

let numb5 = 5;
let power = numb5 ** 3;

console.log(power);

console.log("------------");

let numb6 = 10;
let numb7 = "5";
let result = numb6 === numb7;
console.log(numb6 === numb7);

console.log("------------");

const numb8 = 15;
const numb9 = 11;
if (numb8 > numb9) {
  console.log("Is Greater");
}

const numb10 = 15;
const numb11 = 11;
if (numb10 < numb11) {
  console.log("Is Less ");
}

console.log("------------");

let numb12 = 15;
let numb13 = 11;
if (numb12 !== numb13) {
  console.log("Not Equal");
}

console.log("------------");

let numb14 = 20;
let numb15 = 10;
let result1 = numb14 != numb15 && numb15 < numb14;

console.log(result1);

let numb16 = 20;
let numb17 = 10;
let result2 = numb16 > numb17 || numb17 < numb16;

console.log(result2);

let nameTamara = true;
nameTamara = !nameTamara;
console.log(nameTamara);

console.log("------------");

let city = "";
if (city) {
  console.log("Falsy value detected");
}

let city1 = "Tbilisi";
city1 = 0;
if (city1) {
  console.log("Falsy value detected");
}

const country = "Georgia";
if (country) {
  console.log("Truthy value detected");
}

let state = "New York";
let state2 = "";
if (state || state2) {
  console.log("I live in New York");
}

console.log("-----CHALLENGE-------");

let username = "Tamara";
let username1 = 0;
if (username) {
  console.log("Welcome back");
} else {
  console.log("Please sign up");
}

let Tamo = "Tamara";
let Tam = 0;

console.log(Tamo && "Welcome back");
console.log(Tamo || "Please sign up");
