// For Loops

// Initialize a variable, Run that variable to a condition, Increment that variable.
// Repeat until that condition is met.

// for (let i = 0; i < 5; i++) {
//   console.log("In loop:", i);
// }
// console.log("Loop Finished");

const names = ["Jhordan", "Mario", "Luigi"];

// In this instance we may not know the number for when we wish to stop interating.
// In a database, this is tricky. Use names.length to get the length of the array.
// It will iterate based on the number of items in that array.
for (let i = 0; i < names.length; i++) {
  // When iterating, you can return each item using the index.
  // console.log(names[i]);

  // This code is creating an HTML string for each item in the 'names' array (presumably within a loop),
  // and then logging that HTML string to the console.
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
