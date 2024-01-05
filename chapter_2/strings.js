// 20:30

// Strings
console.log("Hello, Jhordan");

let rrcEmail = "jtejada2@academic.rrc.ca";
console.log(rrcEmail);

// String Concatenation
let firstName = "Jhordan";
let lastName = "Tejada";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting Characters
// [] is zero index meaning 0 represents the first item.
console.log(fullName[0]);

// String Length
// Returns the length of the string.
console.log(fullName.length);

// String Methods
console.log(fullName.toUpperCase());

// Storing the result of the method in a variable.
let result = fullName.toLowerCase();
// Running these method on our string does not alter the original variable we declared.
console.log(result, ",", fullName);

// Using an argument in a method to return a value specific to the argument passed.
let index = rrcEmail.indexOf("@");
console.log(index);

// Function is a snippet of code that preforms a set of tasks.
// Method is a function that is associated with a specific object or datatype
