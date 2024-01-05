// 1:14:00

let age = 25;

// Loose comparsion (Different types can still be equal)
// Type conversion is done in the background.
console.log(age == 25);
console.log(age == "25");
console.log(age != 25);
console.log(age != "25");

// Strict comparsion (Different types cannot be equal)
// Type conversion is not done in the background.

// === and !== , Compares data type before comparing values.
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");
