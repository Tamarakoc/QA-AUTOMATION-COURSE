// 1. String

const myName = "Tamara";
const brotherName = "Davit";

console.log(myName);
console.log(brotherName);

//2. Number

const birthYear = 1987;
const brotherBirthYear = 1989;

console.log(birthYear);
console.log(brotherBirthYear);

//3. Boolean

// The light is off when you enter the room
let isLightOn = false;
console.log("Is the light on?", isLightOn);

// Later, someone turns on the light
isLightOn = true;
console.log("Is the light on?", isLightOn);

//4. Null

// No one have ticket
let ticketOwner = null; //
console.log("Ticket Status", ticketOwner);

//ticket is bought by Tamara
ticketOwner = "Tamara";

console.log("Ticket Status", ticketOwner);

//5. Undefined

let studentPresent; // now value is undefined, declaired variable, not assined

console.log("Student present", studentPresent); // it will print undefined

studentPresent = "Yes"; // i can essigne also true boolean
console.log("Student present", studentPresent);

//6. Array - starts from 0 index (non-primitive)

//const colors = [] // Empty arrays
const colors = ["red", "green", "blue"];
console.log(colors);

const list = [10, 15, 20, 25];
console.log(list);

//Array that has all kind of data types
// not recomended for arrays that have all data types
const array = ["Tamara", 10, true];
console.log(array);

//7. Objects (Non-primitive)

const person = {
    name: "T",
    isStudent: false,
    year: 87,

};

console.log(person)

let personTwo = {
    watch: "Rolex",
    model: "daytona",
    price: 20000,
    isWatchRolex: true,
    country: {
        countryName: "Switzerland",
        city: "Geneva",
        zipCode: "12345"
       
    }
};

console.log(personTwo)












