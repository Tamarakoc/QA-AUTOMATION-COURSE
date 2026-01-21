//1. && (and) signe - returns true only if both conditions are true

if (5 > 3 && 2 < 4) {
  console.log("Hello");
}

// DOes not print anythin because on of the condition is false
if (5 > 3 && 5 < 4) {
  console.log("Hello");
}

//2. || (or) operator - Returns true if at least
// one of the condition is true

if (5 > 3 || 2 < 4) {
  console.log("Hi");
}

if (5 > 3 || 8 < 4) {
  console.log("Holla");
}
