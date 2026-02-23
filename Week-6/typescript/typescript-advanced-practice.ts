function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculateTotal(10, 5));

console.log("--------2--------");

function greetUser(name: string = "User"): string {
  return `Hello ${name}`;
}

greetUser();
console.log(greetUser());
console.log(greetUser("Tamo"));

console.log("--------3--------");

function logMessage(): void {
  console.log("Don't do this function");
}
logMessage();

console.log("--------4--------");

function validatePassword(password: string): Promise<string> {
  //password = "QATester";
  if (password.length >= 8) {
    return Promise.resolve(`Valid Password`);
  } else {
    return Promise.reject(`Password too short`);
  }
}

validatePassword("QATester");
console.log(validatePassword("QATester"));

console.log("--------5--------");

async function checkPassword(password: string) {
  try {
    const success = await validatePassword(password);
    console.log(success);
  } catch (error) {
    console.error(error);
  }
}
console.log(checkPassword("QATester"));

console.log("--------6--------");

type orderStatus = "Pending" | "Shipped" | "Delivered";
let orderStatus: orderStatus = "Delivered";

console.log(`My order is ${orderStatus}`);

console.log("--------7--------");

type ID = number | string;

let studentId: ID = 1007;
let studentName: ID = "Tamo";

console.log(studentId);
console.log(studentName);

console.log("--------8 & 9--------");

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const student: User = {
  id: 1007,
  name: "Tamo",
  email: "Tamo@gmal.com",
};

student.phone = "iPhone";
console.log(
  `${student.name}'s id is ${student.id} and email is ${student.email} and has ${student.phone}`,
);

console.log("--------10--------");

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

const admin: Admin = {
  id: 1007,
  name: "Tamo",
  email: "Tamo@gmal.com",
  role: "admin",
  permissions: ["Yes", "No"],
};
console.log(admin);
//console.log(admin.permissions[0])

console.log("--------11--------");

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

type UserPreview = Pick<User, "id" | "name">;
const userPreview: UserPreview = {
  id: 1007,
  name: "Tamo",
};

console.log(userPreview);

console.log("--------12--------");

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

type PublicUser = Omit<User, "email">;
const publicUser: PublicUser = {
  id: 1007,
  name: "Tamo",
};

console.log(publicUser);

console.log("--------13--------");

let UserTuple: [string, number, boolean];
UserTuple = ["Student", 2026, true];

console.log(UserTuple);

console.log("--------14--------");

interface Product {
  id: number | string;
  name: string;
  price: number;
  status: "Pending" | "Shipped" | "Delivered";
  discount?: number;
}

let newProduct: Product = {
  id: "Chocolate",
  name: "Milka",
  price: 3,
  status: "Pending",
  discount: 0.5,
};

function applyDiscount(product: Product): number {
  if (newProduct.discount) {
    return product.price - product.discount;
  } else {
    return product.price;
  }
}
console.log(applyDiscount(newProduct));

async function processOrder(Product: Product): Promise<string> {
  if (Product.status === "Pending") {
    return Promise.resolve(`Order Processed`);
  } else {
    return Promise.reject(`Order cannot be processed`);
  }
}

console.log(processOrder(newProduct));
processOrder(newProduct)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
