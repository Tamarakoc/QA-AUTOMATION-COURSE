type ID = number;

let userId: ID = 123;

type Car = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "BMW",
  model: "M4",
  year: 2025,
};

console.log(myCar);

type status = "Active" | "Inactive" | "Pending";
let driverLicense: status;
driverLicense = "Active";
driverLicense = "Inactive";
driverLicense = "Pending";
