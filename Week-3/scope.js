// Global Scope , here you can print anything outside of function

let globalVar = "I am global";

console.log(globalVar);

function printSomethsing() {
  if (14 > 2) {
    console.log(globalVar);
  }
  console.log(globalVar);
}

printSomethsing();

// Function Scope , you can't print anything outside of function,
//  you can print anything inside

function greet() {
  let message = "Hello Tamo";
  console.log(message);
}
greet();

// Block Scope

if (14 > 5) {
  const myName = "Tamara";
}

//console.log(myName); -- Does not print error message
