let fruits = ["Apple", "Orange", "Banana", "Kiwi"]; // index - rigis nomeri
console.log(fruits);

//2. Accessing Array Elements - arrays start from 0

console.log(fruits[0]);
console.log(fruits[3]);

//3. Updating array elements

fruits[1] = "Mango";
console.log(fruits);

fruits[3] = "Strawberry";
console.log(fruits);

//4. .length - return how many elements inside an array
console.log(fruits.length); // it's ounting elements only not index, raodenoba listshi

// ------ Methods that retun new array

//5. .concat() - merges arrays into one array
const fruits2 = ["Apple", "Banana", "Orrange"];
const moreFruits = ["CHerry", "Grape"];
const allFruits = fruits2.concat(moreFruits);
console.log(allFruits);

//6.  .flat() - flattens the arrays converse to regular array

const nestedNumbers = [[1, 2], [3, 4], [5]];
const flatNumbers = nestedNumbers.flat();
console.log(flatNumbers);
console.log(flatNumbers[1]);

//7.  .slice() - extract a portion of an array  imas printavs rasac miuTiteb mxolod
//slice (1 is index here - included, 4 is also index here - excluded)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sliceNumbers = numbers.slice(1, 4);
console.log(sliceNumbers);

const myFavorite = ["green", "yellow", "blue", "red", "white"];
const mySlicedFavorite = myFavorite.slice(1, 4);
console.log(mySlicedFavorite);

// ------ Methods that change original arrays //

//1 . Copying an array

const fruitGrocery = ["Kiwi", "Banana", "Cherry"];
const copyfruitGrocery = [...fruitGrocery];
console.log(fruitGrocery);
console.log(copyfruitGrocery);

//2.    .push() - add a new elementat the end of an array

copyfruitGrocery.push("Coconut");
console.log(copyfruitGrocery);

// 3.    .pop() - removes last element from the array
console.log(fruitGrocery);
copyfruitGrocery.pop();
console.log(copyfruitGrocery);

//4.    .unshift() - adds an element at the beginning of an array
console.log(fruitGrocery);
copyfruitGrocery.unshift("Grapes");
console.log(copyfruitGrocery);

//5.   .shift - removes the first element from an array

console.log(fruitGrocery);
copyfruitGrocery.shift();
console.log(copyfruitGrocery);

//6.   .reverse()  - reverses an array

console.log(fruitGrocery);

console.log(copyfruitGrocery.reverse());

//7.     .sort() - sorts the array -> commonly used with numbers

const newNumbers = [3, 6, 8, 2, 1, 77, 32, 62];
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

const stringArrays = ["a", "b", "z", "c"];
stringArrays.sort();
console.log(stringArrays);

// ---- Methods that find an element in the array//

//  indexof() - Returns the first index of a specific element inside an rray
const tamaraFavorite = ["Black", "White", "Red", "Blue"];
console.log(tamaraFavorite.indexOf("Red"));

//2. latsIndexof() - Returns the last index of specific element inside an array
console.log(tamaraFavorite.lastIndexOf("Blue"));

//3.  at() - Gets an element at a specific position

console.log(tamaraFavorite.at(1));
console.log(tamaraFavorite.at(-1)); // -> last element

//4. includes () - Checks if an elements exist inside an array

const trainNumbers = ["F", "E", "B", "D", "Z", "J"];
console.log(trainNumbers.includes("B"));
console.log(trainNumbers.includes("0"));

// ---------JOiners & Converters --------//
//    .join() - converts an array into string

const myFruitsArray = ["green", "yellow", "blue"];
const myFruitsString = myFruitsArray.join(" "); // -> combines
console.log(myFruitsString);

//2. Array.from() = creates a an array from string

const str = "Hello";
const chars = Array.from(str);
console.log(chars);

//3. Array.isArray() - checks if a value is an array

const num = [1, 2, 3, 4, 5];
console.log(Array.isArray(num));

const numNew = 1;
console.log(Array.isArray(numNew));
