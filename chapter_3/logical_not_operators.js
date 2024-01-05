// 31:30

// logical NOT (!)

// Using the ! symbol to determine if it does NOT equal or meet the condition.
console.log(!true); // false
console.log(!false); // true

let user = false;

// An if statement must always return true for the code block to execute.
// !user flips the user from being false, to true.
if (!user) {
  console.log("You must be logged in to continue.");
}
