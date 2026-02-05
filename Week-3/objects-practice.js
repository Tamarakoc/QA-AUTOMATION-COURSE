// Task 1: Object Creation

let car = {
  brand: "BMW", // string
  model: "M3", // string
  year: 2025, // number
  price: 65000, // number

  owner: {
    //// nested object
    name: "Bavarian Motor Works",
  },

  //PART 2: OBJECT METHODS

  description: function () {
    return `${this.brand} is a ${this.model} from the ${this.year}, costs ${this.price}`;
  },

  // Task 3: Update Method

  updatePrice: function (newPrice) {
    this.price = newPrice;
    return this.price;
  },

  calculate: function (disc) {
    this.price = this.price - 400;
    return this.price;
  },
};

console.log(car.description(car.updatePrice(70000)));

console.log("--------------------");

console.log(car.year);
console.log(car["brand"]);

console.log("--------------------");

function propertyChecker(object, property) {
  return property in object;
}
console.log(propertyChecker(car, "brand"));
console.log(propertyChecker(car, "ammount"));

let description = car.description();
let updatePrice = car.updatePrice(70000);

console.log(description);
console.log(updatePrice);

console.log("--------------------");

car.model = "M4";
console.log(car);

car.city = "Munich";
console.log(car);

delete car.city;
console.log(car);

console.log("--------------------");

let keys = Object.keys(car);
console.log(keys);
console.log(keys.includes("brand"));

console.log("--------------------");

let values = Object.entries(car);
console.log(values);
console.log(values.includes("M3"));

console.log("--------------------");

let objEntr = Object.entries(car);
console.log(objEntr);

let flattenedEntries = objEntr.flat();
console.log("Flattened entries:", flattenedEntries);

console.log("--------------------");

// let car = {
//   brand: "BMW", // string
//   model: "M3", // string
//   year: 2025, // number
//   price: 65000, // number

//   owner: {
//     //// nested object
//     name: "Bavarian Motor Works",
//   },

console.log(car.owner.name);
car.owner.name = "BMW";
console.log(car.owner);
