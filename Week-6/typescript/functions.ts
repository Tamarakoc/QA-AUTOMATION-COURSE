function greet(name: string, age: number) {
  console.log(`Hi my name is ${name} and i am ${age} years old`);
}
greet("Tamo", 38);

function greetUser(name: string = "Guest") {
  console.log(`We have ${name} today`);
}

greetUser();
greetUser("Tamo");

function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);
console.log(add(2, 3));

function printSomething(): void {
  console.log("Hello");
}

function checkBalance(amount: number): Promise<string> {
  const balance = 500;

  if (amount <= balance) {
    return Promise.resolve(`Withdrawal of $${amount} is successful.`);
  }
}
