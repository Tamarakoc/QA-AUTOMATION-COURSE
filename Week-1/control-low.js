let age = 24;

//if is keyword
// inside parenthesis (), we need to give condition
//inside curly braces {}, we have provide the code that we want it
// to return if the condition is true.
// age is over 12 -> true
if (age > 18) {
  console.log("Hey, You are a student at school");
}

console.log(age);

// 2. Example when the condiiton is false

age = 13;
if (age > 24) {
  console.log("Hey, You are a student at school");
}

console.log(age);

//3. Else if

let studentScore = 75;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore >= 75) {
  console.log("Grade B");
}

//4. Else - its always true or false

let isRaining = false;

if (isRaining) {
  console.log("Take umbrela");
} else {
  console.log("Don't need umbrela");
}

// 5. if, Else if, Else

let goalScore = 3; // === is comparison, = assingment

if (goalScore > 4) {
  console.log("You Won");
} else if (goalScore === 3) {
  console.log("It is a time game");
} else {
  console.log("You Lose");
}

let goalScore1 = 8; // === is comparison, = assingment

if (goalScore1 > 6) {
  console.log("You Won");
} else if (goalScore1 === 5) {
  console.log("It is a time game");
} else if (goalScore1 > 4) {
  console.log("You Failed");
} else {
  console.log("You Lose");
}

//6. Switch statement

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Friday");
    break;
}

console.log("Hello World");
