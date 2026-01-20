// Data Types
//42 - Number
//"Hello World" - String
//null - null
//undefined - undefined
//[1, 2, 3]
//{name: "Alex", age1: 20} - Object

//assigned value to verible
let movie = "You have got mail";
//re-assigned value to veriable
movie = "Game of Throne";
//print value
console.log(movie);

//assigned value to unchanged veriable
const age = 38;
//print value
console.log(age);

//assigned boolean value to veriable
let likeJavaScript = true;
// print boolean
console.log(likeJavaScript);

//assigned undefined value
let iceCream;
// re-assigned undefined value to veriable
iceCream = "Pistachi";
//print re-assigned undefined value
console.log(iceCream);

//assigned null value to veriable
let song = null;
//re-assigned null value to veriable
song = "Enemy";
//re-assigned value
console.log(song);

//printed visual seperator for better reading
console.log("-----------------------");

// String, it is Primitive, Immutable and has Single Value
// Array, It is Non-primitive, mutable and has several value
// Number, it is Primitive, Immutable and has Single Value
// Object, It is Non-primitive, mutable and can store multiple values

let a = "JS";
let b = [10, 20];
let c = 100;
let d = { city: "Paris" };
console.log(a, b, c, d);

//printed visual seperator for better reading
console.log("-----------------------");

// So value of X is String and is "Hello"
// b - it is primitive behavior because string is primitive
// b - it is primitive behavior because string is primitive
// it has single vaule
let x = "Hello";
let y = x;
y = "Hi";

console.log(x);

//printed visual seperator for better reading
console.log("-----------------------");

//assigned number values to array that cant't be changed, modified
//then assigned string value to array variable that can be modified
// also assigned mixed values to array that can be modified
const year = [2021, 2022, 2023, 2024, 2025];
let car = ["BMW", "Toyota", "Lexus", "Porsche", "Mercedes"];
let model = ["Toyota", "Rav4", 2025, "Olive", true];

//print all array together
console.log(year, car, model);

//printed visual seperator for better reading
console.log("-----------------------");

// created object and assigned values to this object,
//  from where one property is array, ather string
let fruit = {
  type: "apple",
  shape: "round",
  color: "red",
  tasteSweet: "true",
  quantity: [1, 5, 6],
};

//printed object
console.log(fruit);

// created object and assigned values to this object,
//  from where one property is array with numbers, one array with strings and another with mixed values (boolean and string)
const phone = {
  brandOnde: "Apple",
  brandTwo: "Samsung",
  phoneYear: [2025, 2024],
  colors: ["white", "Black", "Gold"],
  models: ["14pro", "16promax", "Galaxy S25", true],
};

// printed object
console.log(phone);

// created object and assigned values to this object,
//  i used array with strings and boolean
let music = {
  band: "Imagine Dragons",
  singer: "Dan Reynolds",
  songs: ["Enemy", "Folow you", "Believer"],
  myFavorite: ["Enemy", true],
  iDontLike: ["Believer", false],
};

// printed values of keys from object, using with dot.notation
console.log(music.band);
console.log(music.songs);
console.log(music);

//printed visual seperator for better reading
console.log("-----------------------");

//assigned value to number variable
let number = 10;
// re-assigned value to variable for my practice
//number = -1;
// whit this if condition, i
if (number > 0) {
  console.log("Positive number");
}
//if (number < 0) {
//console.log("Negative number");
//}

//printed visual seperator for better reading
console.log("-----------------------");

// assigned variable with boolean, that nameTamo is false
//with if condition i compared name is true
// else will activate if is false
let nameTamo = false;
if (nameTamo === true) {
  console.log("Correct Name");
} else {
  console.log("incorrect");
}

// assigned number value to variable
//re-assigned value twoce
// with if the if condition studenScore > 90 is true, if block runs. if condition is false,
// esle if condition will run, if else if is also false than else condition will run
let studentScore = 100;
studentScore = 85;
studentScore = 61;
if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//printed visual seperator for better reading
console.log("-----------------------");

// assigned string value to veriable and used switch to get the correct value.
// break is stopping running code
let flavors = "Pistachio";
switch (flavors) {
  case "Chocolate":
    console.log("wrong");
    break;

  case "Vanilla":
    console.log("false");
    break;

  case "Pistachio":
    console.log("right");
    break;

  default:
    console.log("Good Choice");
}

//printed visual seperator for better reading
console.log("-----------------------");

//assigned 105 value to veriable and used if condission
// if numbe < 0 is true, it will print "Negative number, we don't care", if it is not
// else if <= 9 will run and print "Single digit number", if it is also false
// second else if will run <100 and print "Double digit number", but if all of them is false, than
// else condision will run and print "Definitely not a negative, single or double digit number, so it is something else"

let number1 = 105;

if (number1 < 0) {
  console.log("Negative number, we don't care");
} else if (number1 <= 9) {
  console.log("Single digit number");
} else if (number1 < 100) {
  console.log("Double digit number");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else"
  );
}

//printed visual seperator for better reading
console.log("-----------------------");

// Just for example did switch

//let numbers = 100;
//switch (numbers) {
//case numbers:
//console.log("Negative number, we don't care");

// case numbers:
//console.log("Single digit number");
//case numbers:
//console.log("Double digit number");
//case numbers:
// console.log(
//"Definitely not a negative, single or double digit number, so it is something else"
// );
//}
