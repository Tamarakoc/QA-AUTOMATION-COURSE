// Building blocks of numeric logic

let a = 15;
let b = 5;

console.log(a - b);
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

console.log("---------------------");

// Compariring numbers always return true or false

let c = 7;
let d = 6;
console.log(c > d);
console.log(d < c);
console.log(c === 7);
console.log(c !== d);

// Math.round() - rounds to the nearest whole number
// Math.floor() - rounds down to the whole number, removes decimals
// Math.ceil() - rounds up to the whole number
// Math.trunc() - removes the decimals
c = 7.3;
console.log(Math.round(c)); // 7
console.log(Math.floor(c)); // 7
console.log(Math.ceil(c)); // 8
console.log(Math.trunc(c)); // 7

c = 7.7;
console.log(Math.round(c)); // 8
console.log(Math.floor(c)); // 7
console.log(Math.ceil(c)); // 8
console.log(Math.trunc(c)); // 7

console.log("---------------------");

//  .toFixed() - fomrats a number to a fixed number of decimals, (ამრგვალებს ნაწილებს წერტილის მერე),
//  შედეგი არის ყოველთვის სტრინგი

a = 7.3568945;
console.log(a.toFixed(0)); // "7" no decimals (rounds to whole number)
console.log(a.toFixed(1)); // "7.36" 1 number after dot
console.log(a.toFixed(4)); // "7.3569" 4 numbers after dot

console.log("---------------------");

// Number() converts value in to the number

a = "8"; // string value
c = "9.015"; // string value
console.log(Number(a)); // 8
console.log(Number(c)); // 9.015

console.log("---------------------");

// parselnt() converts a value into a integer by removing decimals

a = 8.456; // decimal number

console.log(parseInt(a)); // 8
console.log(parseInt(c)); // 9

console.log("---------------------");

// parseFloat() converts value into decimal number

a = "8.546"; // string
console.log(parseFloat(a));

console.log("---------------------");

// isNan() - check if value is not a number , It converts the value to a number first, then checks if it’s NaN.

a = "9"; // string
b = 12; // number
c = true; // Boolean

console.log(isNaN(a)); // false
console.log(isNaN(b)); // false because it is number
console.log(isNaN(c)); // false

console.log("---------------------");

// Number.isInteger() It checks only if the value is exactly integer.

c = 2.56;
console.log(Number.isInteger(a)); // false
console.log(Number.isInteger(b)); // true because it is number
console.log(Number.isInteger(c)); // false because it is not integer, it is decimal number

console.log("---------------------");

// MATH UTILITY METHODS

// math.abs() - brings absolute values of number,
// if it is -1 brings 1, if it is possitive is stays possitive,
// same with 0

let e = -7;
let f = 25;
let g = 0.152;

console.log(Math.abs(e)); // 7
console.log(Math.abs(f)); // 25
console.log(Math.abs(g)); // 0.152

console.log("---------------------");

// Math.min () returns smallest values
// Math.max () returns largest value

let h = (12, 7, 7.53, 15);

console.log(Math.min(12, 7, 7.53, 15)); // returns 7
console.log(Math.max(12, 7, 7.53, 15)); // returns 15

// Math.pow() raises a number to power, (კვადრატში აყავს, კუბში, ამრავლებს)
// we should give write base and exponent, two values, not one,

let i = (25, 2); // here i have only exponent 2
let j = (1.5, 3); // here i have only exponent 3, i should declair base alos, or use only values in print not variables

console.log(Math.pow(i)); // Nan no values
console.log(Math.pow(j)); // Nan no values
console.log(Math.pow(25, 2));
console.log(Math.pow(1.5, 3));

console.log("---------------------");

// Math.sqrt() - Returns the square root of a number - ფესვი ამოყავს , აბრუნებს რიცხვის კვადრატს

i = 225;
j = 88;

console.log(Math.sqrt(i)); // 15
console.log(Math.sqrt(j)); // 9.3808
console.log(Math.round(Math.sqrt(j))); // 9 (square root and round up together)

console.log("---------------------");

// Math.random() - Generates a random decimal number between o and 1
// but 1 is not included

// Math.floor(Math.random() * (max -min + 1)) + min

Math.random();
console.log(Math.random());

//

let max = 25;
min = 3;

console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Math.random() → random decimal between 0 and 1

// (max - min + 1) → gives the range size

// 25 - 3 + 1 = 23

// Math.random() * 10 → decimal between 0 and 23

// Math.floor(...) → makes it a whole number (3 to 25)

// + min → shifts it to become 3 to 25

// Final output: random integer from 3 to 25
