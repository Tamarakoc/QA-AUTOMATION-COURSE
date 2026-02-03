// 1.
// i = index

// i++; // 1+1
// i++; //2+1
// i++; //3+1
// i++; //4+1
// console.log(i);

let i = 1;
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

const fruits = ["apple", "banana", "orange"]; // same as strings

for (let i = 0; i <= fruits.length; i++) {
  // rato < da ara <=
  console.log("Fruits:", fruits[i]);
}

// do multiplication table with loop

let E = 1;
for (let E = 1; E <= 5; E++) {
  if (E === 3) {
    continue;
  }
  console.log(E);
}
