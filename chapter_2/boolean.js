// 1:05:00

// Booleans & Comparisons
// true, false are booleans that determines wheter an expression or function returns true or false.
// "true", "false" are not booleans.
console.log(true, false, "true", "false");

// Methods can return booleans
let email = "jtejada2@academic.rrc.ca";
let names = ["mario", "luigi", "toad"];

// Checks if the character passed is in the string. Returns true if it does.
// let result = email.includes("@");

// Checks if the string/item passed is in the array, Returns true if it does.
let result = names.includes("luigi");

// Comparison Operators
let age = 25;

// Use == to check if the value of a variable equals a value.
// Use != to check if the value of a variable does not equal a value.
// Use > to check if the value of a variable is greater than a value.
// Use > to check if the value of a variable is less than a value.
// Use <= or >= to check if the value of a variable is greater than / less than or equal to a value.
console.log(age == 25);
console.log(age == 30);
console.log(age != 25);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = "Jhordan";
// You can run comparisons on strings. (Case Sensitive.)
console.log(name == "Jhordan");
console.log(name == "jhordan");

// You can check if a string is less than or greater than another string.
// This is based on the first letter depending on the position of the alphabet.
console.log(name > "Crystal");

// Lower case letters are greater than uppercase letters.
console.log(name > "jhordan");
console.log(name > "crystal");

// When Comparing, the value's type is not considered.
