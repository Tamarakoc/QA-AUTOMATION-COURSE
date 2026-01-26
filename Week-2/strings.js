let statement = " I love ice-cream ";

//  .lenght() - it counts characters in string

console.log(statement.length); // 18 , because i have spaces also

console.log("---------------------");

// accessing characters with index, index always starts with 0

console.log(statement[9]);

console.log("---------------------");

// Changing lower case to Upper case and vise versa

console.log("---------------------");

console.log(statement.toUpperCase());
console.log(statement.toLowerCase());

console.log("---------------------");
// .trim() trims spaces, removes spaces from the start and end of a string

console.log(statement.trim());

console.log("---------------------");

// .slice() extracts part of a sting, between two indexes, but last index is not included, for example, 8 is not included

let ice = "I love ice-cream";
console.log(ice.slice(4, 9)); //ve ic

let she = "Tamara ko";
console.log(she.slice(2, 8)); //maka k

console.log("---------------------");

// .replace() we can change existing value with new value

let vegies = "I eat no vegies";
console.log(vegies.replace(" no", "")); // used " no" to remove double space
console.log(vegies.replace("no", "a lot of"));

console.log("---------------------");

//  .includes() shows if a string contains certain words, we can us it also with arrays, prints true and false values

let seafood = "I have never ever eaten";
console.log(seafood.includes("never ever")); // show true, because it includes this words
console.log(seafood.includes("always")); // false because it doesn't include this ward

let Seafood = ["Shrimps", "Oyster", 7, 5];
console.log(Seafood.includes("Oyster" && 7)); // true

console.log("---------------------");

//  .split - it splits a string into an arrays using the seperator.
// .joins - it joins arrays into single string

let Istudy = "JS,SQL,API";

console.log(Istudy.split(","));
console.log(Istudy.split(""));
console.log(Istudy.split(" "));

let study = [1, 2, 3, 4];

console.log(study.join(",")); // splits with coma
console.log(study.join("")); //splits characters
console.log(study.join(" ")); // makes space

console.log("---------------------");

// . concat() - joins two or more strings together

let me = "I live in";
let city = "Brooklyn";
let state = "NY";
let zip = 11229;

console.log(me.concat(" ", city));
console.log(me.concat(" ", city, ", ", state, " ", zip));
console.log(me + " " + city + "," + " " + state + " " + zip);

console.log("---------------------");

// .indexOf() - It tells you the index (position) of a letter or word inside a string,
//  if it doesn't exist brings you -1

let country = "I was born in Georgia";

console.log(country.indexOf("a")); //3
console.log(country.indexOf("in")); //11
console.log(country.indexOf("Tbilisi")); //-1

// .startsWith() & endsWith() - Checks whether a string starts or ends with a certain substring easy way
// They always return true or false

let Name = "Tamara";
console.log(Name.startsWith("T")); // true
console.log(Name.endsWith("ra")); // true
console.log(Name.startsWith("a")); // false
console.log(Name.endsWith("r")); // false

console.log("---------------------");

// ${} `` - easy way to write strings with variables

let product = "Ice-cream";
product = "Coca-cola";
let price = 3;
price = 2;
let sales = `${product} costs ${price}$`;
console.log(sales);

console.log("---------------------");

// Multi-line string = text on more than 1 line
//Normally a string is in one line, but sometimes you want it like a paragraph.
// ` and /n

let text = `Hello Tamara, 
Welcome to Javascript,
and Good Luck`;

console.log(text);

let Newtext = "Hello Tamara,\n Welcome to Javascript,\n and Good Luck";
console.log(Newtext);

console.log("---------------------");

// In template literals (backticks ` `) you can write math or functions inside ${ } and it will print the result

let M = 10;
let N = 15;
let sum = M + N;
//let calculation = `If ${M} + ${N} and ${N} - ${M}, Than we will get 25 and 5`;
let calculation = `If ${M} + ${N} , Than we will get ${sum}`;

console.log(calculation);

console.log("---------------------");

// Combining String Methods + Template Literals
// Template literal = a sentence with ${ }

// It lets you put values inside a string easily.
// String methods = tools to change the string

let myname = "Tamara";
let occupation = "QA Tester";

console.log(`${myname.split("")} is a ${occupation}`);
console.log(
  `${myname.replace("Tamara", "I am")} a ${occupation.replace("Tester", "Engineer")}`,
);
