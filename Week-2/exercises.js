const age = 28;
if (age >= 18) {
  console.log("You can enter");
} else {
  console.log("You are too young");
}

console.log("------------");

let pasword = "QATESTER";
if (pasword.length >= 8) {
  console.log("Strong password");
} else {
  console.log("Weak password");
}

console.log("------------");

let num = 5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

console.log("------------");

let username = "Tamo";
let password = "1007";

if (username && password) {
  console.log("Login Successful");
} else {
  console.log("Wrong Credentials");
}

console.log("------------");

let totalPrice = 101;
if (totalPrice >= 100) {
  console.log("You get a discount");
} else {
  console.log("No Discount");
}

console.log("------------");

let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin");
} else if (isLoggedIn && !isAdmin) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}

console.log("------------");
