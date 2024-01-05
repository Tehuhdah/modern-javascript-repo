// 39:00

// Switch Statements
const grade = "A";

// Switch Statements can be a more efficient way to evaluate multiple conditions.
// Switch Statements are a good alternative to else if statements.
// If the value of Grade, matches the case, the following code block executes.
// If you do not break, all the code blocks in each case after the case that passes will execute.
// Break ensures that you end the switch statement at the case that passes.
// Switch Statements use strict equality when evaluating conditions and expressions ===.
switch (grade) {
  case "A":
    console.log("You got an A! :D");
    break;
  case "B":
    console.log("You got a B! :)");
    break;
  case "C":
    console.log("You got a C! :|");
    break;
  case "D":
    console.log("You got a D..");
    break;
  case "E":
    console.log("You got an E...");
    break;
  // If no case passes, the default case will execute.
  default:
    console.log("Not a valid grade.");
}

// Using If Statements

// if (grade === "A") {
// } else if (grade === "B") {
// } else if (grade === "C") {
// } else if (grade === "D") {
// } else if (grade === "E") {
// } else {
// }
