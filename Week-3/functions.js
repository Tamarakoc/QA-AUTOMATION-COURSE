//console.log("Hello world"); ()

function greet() {
  const addition = 2 + 5;
  console.log(addition);
}

greet(); // call the function, giving instruction to JS to make my function work

console.log("Bye Students");

// 2. Function with a single parameter

function newGreet(name) {
  // (name) parameter
  console.log(`Hello ${name} welcome to the class!`);
}
newGreet("Tamara");

//3. Function with multiple parameters

console.log("---------------------");

function add(num1, num2) {
  console.log(num1 + num2);
}

add(3, 5);

function multiplication(num1, num2) {
  console.log(num1 * num2);
}

multiplication(3, 5);

// function printNumber(num1, num2) {
//   if (num1 > num2) {
//     console.log("Number is bigger");
//   } else {
//     console.log("NUmber is smaller");
//   }
// }

// printNumber(5, 2);

// console.log("---------------------");

// function tax(N, G, T) {
//   console.log(N * G * T);
// }
// let N = 1;
// N = 2;
// let G = 2;
// G = 5;
// const T = 10;

// tax(N, G, T);

// console.log("---------------------");

// // 4. Default Parameters (name = "student")

// function greetStudent(name = "student") {
//   console.log(`Hi ${name.toLocaleUpperCase()}, Welcome to JS class`);
// }
// greetStudent("Tamara");
// //greetStudent();

// // 5. Return Values

// function addNewOne(num1, num2) {
//   return num1 + num2;
// }
// const functionResult = addNewOne(3, 6);

// console.log(functionResult);

// console.log("---------------------");

// // 6. Arrow function =>

// const greetStudentsTwo = (student) => {
//   console.log(`Hello ${student}, Welcome to Class`);
// };
// greetStudentsTwo("Tamara");

// function generateRandomNumber(number) {
//   return number;
// }
// const array = ["Blue", "Red", "Green"];

// const randomNumber = generateRandomNumber();

// console.log(array[randomNumber]);
