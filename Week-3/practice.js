//const carBrands = ["toyota", "bmw", "audi", "honda"];
const numbers = [10, 25, 40, 7];
const carSentence = "  Cars are fast and fun to drive  ";
const decimalNumber = 12.6;

function firstAndLastChar(text) {
  const cleaned = text.trim();
  //console.log(cleaned);
  return [cleaned[0], cleaned.at(-1)];
}
firstAndLastChar(carSentence);
//console.log(firstAndLastChar(carSentence));

// ### 🔤 Task 3: Word Counter

// Write a function that:

// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words

// 📌 Use string and array methods only.

function wordCounter(str) {
  return str.trim().split(" ").length;
}
console.log(wordCounter(carSentence));

// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise

// 📌 Case-insensitive comparison required.

const carBrands = ["toyota", "bmw", "audi", "honda"];

function brand(cars, brand) {
  if (cars.includes(brand)) return "brand exists";
  return "does not exist";
}
console.log(brand(carBrands, "mercedes"));

// 1. Takes:
//     - car brand
//     - car price
//     - user budget
// 2. Cleans the brand name
// 3. Rounds the price
// 4. Checks if the car is affordable
// 5. Returns a sentence using **template literals**

// 📌 Sentence example (do not copy):

function car(brand, price, budget) {
  if (price <= budget) return `you can buy the ${brand}`;
  return "expensive";
}
console.log(car("audi", 150, 100));

function budgetCheck(price, budget) {
  if (isNaN(price) || isNaN(budget) || price < 0 || budget < 0) {
    return "Invalid input";
  }

  if (price <= budget) {
    return "Within budget";
  } else {
    return "Over budget";
  }
}

console.log(budgetCheck(8000, 5000));
