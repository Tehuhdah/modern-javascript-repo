// 1:18:00

// Type Conversion
let score = "100";
// This results in string concatenation since we are trying to add a value to a string.
console.log(score + 1); // '1001'

// Converts the current data type to a number.
score = Number(score);
console.log(score + 1); // 101

// Use typeof to check the type of the variable passed.
console.log(typeof score);

// Returns NaN because we cannot convert a string literal to a Number.
// let result = Number("hello");
// console.log(result, typeof result);

// Converts the current data type to a string.
// Returns '50'
// result = String(50);
// console.log(result, typeof result);

// When converting a value to a Boolean, all positive and negative numbers are considered true.
// 0 is considered false.
let result = Boolean(100);
console.log(result, typeof result);

// All strings of any length and that are not an empty string is considered true.
result = Boolean("0"); // Not an empty string.
console.log(result, typeof result);

result = Boolean(""); // An empty string.
console.log(result, typeof result);
