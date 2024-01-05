// 52:30

// An Array that contains strings.
let ninjas = ["JhoJin", "Franchi", "Crischink"];

// Reassigning the first item in the array.
// ninjas[0] = "Jhun Clerk";

// Returns the ninjas array.
//console.log(ninjas);

// Returns the specific item in the array based on the index passed.
//console.log(ninjas[0]);

// an Array that contains ints.
// let ages = [20, 25, 30, 35];

// Prints the 3rd item in the array.
// console.log(ages[2]);

// Showcasing that arrays can consist of different data types (Not Recommended.)
// let random = ["Jho", "Tehj", 20, 50];

// Returns the number of items inside of the array.
// console.log(ninjas.length);

// Array Methods

// Takes all items in the array, and joins them using the delimeter into a string.
// let result = ninjas.join(" - ");

// Returns the index of the item specified in the array. (Case Sensitive.)
// let result = ninjas.indexOf("Crischink");

// Combines the current array with an array specified into 1 array containing the items from both arrays.
// let result = ninjas.concat(["Jhun Clerk", "Jhin Miko"]);

// Adds an item to the last position of an array, Returns the length of the new array.
// Clasified as a Destructive Method, meaning it alters the original array.
let result = ninjas.push("Erik San");

// Removes the last item in the array, Returns the item that has been removed from the array.
result = ninjas.pop();

console.log(result);
console.log(ninjas);
