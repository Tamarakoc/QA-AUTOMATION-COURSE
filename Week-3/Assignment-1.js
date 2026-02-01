const carBrands = ["toyota", "bmw", "mercedes", "porsche"];
const numbers = [5, 8, 15, 32];
const sentence = "  I want to buy a car  ";
const number = 3.56;

console.log("---------------------");

function cleanText(sentence) {
  return sentence.trim().toUpperCase();
}

console.log(cleanText(sentence));

console.log("----------2----------");

function firstLastChar(str) {
  const clean = cleanText(str);
  console.log(clean);
  return [clean.at(0), clean.at(-1)];
}
console.log(firstLastChar(sentence));

console.log("----------3----------");

function wordCounter(str) {
  const clean = cleanText(str);
  console.log(clean);
  return clean.split(" ").length;
}
console.log(wordCounter(sentence));

console.log("----------4----------");

function brandChecker(array, str) {
  if (array.includes(str)) return "Brand exists";
  else return "Brand not found";
}
console.log(brandChecker(carBrands, "toyota"));

console.log("----------5----------");

function lastBrand(arr) {
  return arr.at(-1);
}
console.log(lastBrand(carBrands));

console.log("----------6----------");

function formatBrands(arr) {
  return arr.join(", ").toUpperCase();
}

console.log(formatBrands(carBrands));

console.log("----------7----------");

// const number = 3.56;

function safeRound(num) {
  if (num.isNAN) return "Invalid Number";
  //if (typeof num !== "number") return "Invalid Number";
  else return Math.round(num);
}
console.log(safeRound(number));

console.log("----------8----------");

function priceComparison(price1, price2) {
  if (price1 === price2) return "Prices are Equal";
  if (price1 > price2) return "First is higher";
  else return "Second is higher";
}
const price1 = 15;
const price2 = 20;

console.log(priceComparison(price1, price2));

console.log("----------9----------");

let min = 1;
let max = 10;

function randomWholeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomWholeNumber(min, max));

console.log("----------10----------");

function conditionalThinking(carPrice, carBudget) {
  if (carPrice < 0 || carPrice.isNAN || carBudget < 0 || carBudget.isNAN)
    return "Invalid Input";
  if (carPrice >= carBudget) return "Within budget";
  if (carPrice > carBudget) return "Over budget";
  else return "Invalid Input";
}

const carPrice = 8000;
const carBudget = 5000;

console.log(conditionalThinking(carPrice, carBudget));

console.log("----------11----------");

const carBrand1 = "BMW";

function carDialSummary(carBrand1, carPrice, carBudget) {
  const conditionalThinkingResult = conditionalThinking(carPrice, carBudget);
  if (conditionalThinkingResult === "Within budget")
    return `${carBrand1} costs ${carBudget}, I can buy it`;
  else return `${carBrand1} is to expensive`;
}
console.log(carDialSummary(carBrand1, carPrice, carBudget));
