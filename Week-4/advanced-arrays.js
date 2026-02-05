const numbers = [3, 6, 9, 12, 15];

// map() - transforms each element inside an array and then returns a new array

const tripled = numbers.map(function (num) {
  // function can take another function as a parameter
  return num * 3;
});

console.log(tripled);
