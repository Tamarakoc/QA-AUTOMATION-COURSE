let carBrands = ["BMW", "Toyota", "Mercedes", "Porsche", "Lexus"];
//let numbers = [10, 4, 7, 15, 22, 20.5];
//let statement = " I want to buy a car ";
//let score = 10.5678;

// Arrays (car Brands)

console.log(carBrands[0]); // [0] with using index, gives us first car brand in the aaray
console.log(carBrands.length); // shows us how many element is in arrays, we have 5
console.log(carBrands.at(-1)); // gives last element in the array

console.log("-----------2----------");

carBrands[2] = "Honda"; // [2] changes second element in the array
carBrands[4] = "Audi"; // [4] changes last element in the array
console.log(carBrands);

console.log("-----------3----------");

NewcarBrand = "Hyundai";
carBrands.push(NewcarBrand); // add new element to the end pf the array

console.log(carBrands);

carBrands.pop(); // removes last element Hyundai from the array
console.log(carBrands);

NewCarBrand = "Jeep";
carBrands.unshift(NewCarBrand); // adds element to the biggining

console.log(carBrands);

carBrands.shift(); // removes from the beginning and returns removed item
console.log(carBrands);

console.log(carBrands.reverse()); //  flips the array order, last becomes first, and first becomes last

carBrands.sort(); // orders the array items in alphabetical order (A → Z)
console.log(carBrands);

console.log("-----------4----------");

NcarBrand = "Porsche";
carBrands.push(NcarBrand); // added new element to the array
console.log(carBrands);

console.log(carBrands.includes("Toyota")); // checks if array includes Toyota, if there is Toyota
console.log(carBrands.indexOf("BMW")); // it will bring 1
console.log(carBrands.lastIndexOf("Porsche")); // it will bring 5

console.log("-----------5----------");

let carBrandsString = carBrands.join(", "); // coverts array to string

console.log(carBrandsString); // printed string

console.log(Array.isArray(carBrands)); // check if array is array

let word = "Engine";
let wordNew = Array.from(word); // convert string to array
console.log(wordNew);

console.log("-----------6----------");

let statement = " I want to buy a car ";

console.log(statement.trim());

let cleanstatement = statement.trim(); // removes spaces at the beggining and end
console.log(statement.length);

console.log("-----------7----------");

console.log(cleanstatement.toUpperCase()); // converts to upper case
console.log(cleanstatement.toLowerCase()); // converts to lower case
console.log(cleanstatement[0]); // brings first character
console.log(cleanstatement.at(-1)); // brings last character

console.log("-----------8----------");

console.log(cleanstatement.slice(0, 6)); // prints first word of the string
console.log(cleanstatement.slice(16, 19)); // prints last word of the sprint

console.log(cleanstatement.replace("car", "BMW")); // replace word car with BMW

console.log("-----------9----------");

console.log(cleanstatement);
console.log(cleanstatement.includes("car")); // should bring true, if this word exist in string
console.log(cleanstatement.indexOf("car")); // 16, finds the position of a word
console.log(cleanstatement.startsWith("I")); // should bring true, to check if it starts with specific word or character
console.log(cleanstatement.endsWith("car")); // should bring true, to check if it ends with specific word or character

console.log("-----------10----------");

console.log(cleanstatement.split(" ")); // splits (cust) in to the words

cleanstatement = "I want to buy a car";
let vehicle = "a bike";

console.log(cleanstatement.concat(" ", "and", " ", vehicle));

console.log("-----------11----------");

car = "Toyota";
carYear = 2024;
carAge = 2026 - carYear;

console.log(
  `I bought ${car}, was made in ${carYear} and is ${carAge} years old`,
);

console.log("-----------12----------");

let score = 10.5678;
console.log(Math.round(score)); // rounds decimal
console.log(Math.ceil(score)); // round up
console.log(Math.floor(score)); // round downd
console.log(Math.trunc(score)); // removed decimal

console.log("-----------13----------");

// .toFixed returns string not a number
console.log(score.toFixed(2)); // rounds 2 digits after decimal
console.log(score.toFixed(3)); // rounds 2 digits after decimal

console.log("-----------14----------");

let a = "7";
let b = "7.056";

console.log(Number(a));
console.log(parseInt(b));
console.log(parseFloat(b));

console.log("-----------15----------");

let c = "Tamara";
let d = 7;

console.log(isNaN(c));
console.log(Number.isInteger(d));

console.log("-----------16----------");

let e = -7;
let i = (225, 5);
let j = 88;
let h = 225;
let numbers = [10, 4, 7, 15, 22, 20.5];

console.log(Math.abs(e));
console.log(Math.min(10, 4, 7, 15, 22, 20.5));
console.log(Math.max(10, 4, 7, 15, 22, 20.5));
console.log(Math.pow(225, 5));
console.log(Math.sqrt(h));

console.log("-----------17----------");

console.log(Math.random());

let min = 1;
let max = 10;
console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log("-----------Final Mini CHallenge----------");

let sentence = " I don't want to buy car ";
let numberofwords = sentence.trim().toUpperCase().split(" ");

console.log(numberofwords);

console.log(`Number of words are ${numberofwords.length}`);
