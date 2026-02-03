let number = [5, 3, 10, 15, 23];

function printElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printElement(number);

console.log("----------2----------");

function indexValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

indexValue(number);

console.log("----------3----------");

function firstLast(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i === arr.length - 1) console.log(arr[i]);
    //console.log(arr[0], arr[arr.length - 1]);
  }
}
firstLast(number);

console.log("----------4----------");

let color = "Purple";

function loopThroughString(str) {
  let i = 0;
  while (i < str.length) {
    console.log(str[i]);
    i++;
  }
}
loopThroughString(color);

console.log("----------5----------");

function stopWhenFound(arr, value) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === value) {
      return arr[i];
    }
  }
}

console.log(stopWhenFound(number, 10));

console.log("----------6----------");

//let number = [5, 3, 10, 15, 23];

function printValues(arr) {
  for (let numb of arr) {
    console.log(numb);
  }
}
printValues(number);

console.log("----------7----------");

function skipValue(arr, value) {
  for (let numb of arr) {
    if (numb === value) {
      continue;
    }
    console.log(numb);
  }
}
skipValue(number, 15);

console.log("----------8----------");

let colors = ["red", "blue", "purple"];

function uppercaseStrings(arr) {
  let newArr = [];
  for (let element of arr) {
    newArr.push(element.toUpperCase());
  }

  return newArr;
}
console.log(uppercaseStrings(colors));

function uppercaseStr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}
console.log(uppercaseStr(colors));
console.log(colors);

console.log("----------9----------");

function reverseOrder(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reverseOrder(number);

console.log("----------10----------");

let fruits = [
  "Apple",
  "Orange",
  "Banana",
  "Kiwi",
  "Strawberry",
  "Lemon",
  "Berry",
];

function lengthChecker(arr) {
  for (let fruit of arr) {
    if (fruit.length > 4) {
      console.log(fruit);
    }
  }
}
lengthChecker(fruits);
