let studentName: string = "Tamara";
let course: string = "QA Automation";

console.log("-------2-------");

const age3: number = 38;
const price: number = 15.5;

console.log("-------3-------");

let isStudent: boolean = true;
let isOnline1: boolean = false;

console.log("-------4-------");

let randomValue: any = 10;
randomValue = "Chocolate";
randomValue = true;

console.log("-------5-------");

let city1: string[];
//city1 = 8; // Type 'number' is not assignable to type 'string[]

console.log("-------6-------");

let carBrands1: string[] = ["BMW", "Toyota", "Lexus", "Mercedes"];

console.log("-------7-------");

let scores1: number[] = [2, 3, 6, 15, 20];

console.log("-------8-------");

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Tamo",
  age: 38,
  isAdmin: true,
};

console.log(user);

console.log("-------9-------");

let product: { title: string; price: number; inStock: boolean } = {
  title: "Chocolate",
  price: 5,
  inStock: true,
};
console.log(`${product.title} costs ${product.price}$`);

console.log("-------10-------");

let students: { name: string[]; age: number[]; isActive: boolean } = {
  name: ["T", "D", "N"],
  age: [8, 6, 5],
  isActive: true,
};

console.log(
  students,
  // `We have three students in the class ${students.name}. there ages are ${students.age}.`,
);

let students1: { name: string; age: number; isActive: boolean }[] = [
  { name: "T", age: 8, isActive: true },
  { name: "D", age: 6, isActive: true },
  { name: "N", age: 5, isActive: true },
];

console.log(students1);

let student1: { name: string; age: number; isActive: boolean } = {
  name: "T",
  age: 8,
  isActive: true,
};
let student2: { name: string; age: number; isActive: boolean } = {
  name: "D",
  age: 6,
  isActive: true,
};
let student3: { name: string; age: number; isActive: boolean } = {
  name: "N",
  age: 5,
  isActive: true,
};
let studentss: { name: string; age: number; isActive: boolean }[] = [
  student1,
  student2,
  student3,
];
console.log(studentss);
