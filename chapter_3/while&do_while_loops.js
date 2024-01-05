// 11:00

// While Loops

// The functionality of a while loop is similar to a for loop, the syntax is different.
// for (let i = 0; i < 5; i++) {
//   console.log("In loop:", i);
// }

// Initialize i beforehand.
// let i = 0;

// while (i < 5) {
//   console.log("in loop: ", i);
//   // Make sure to iterate or an infinite loop will occur.
//   i++;
// }

// const names = ["Jhordan", "Mario", "Luigi"];
// let i = 0;

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// 15:00
// Do While Loops
// In a do while loop, you execute the code block first and then run the condition.
// The code block will always run at least once and will iterate until the condition is met.
let i = 3;

do {
  // Runs the code block
  console.log("val of i is: ", i);
  // Increment after the code block.
  i++;
  // Runs the condition.
} while (i < 5);
