// 26:30

// Logical Operators - OR || and AND &&
// OR || - Only 1 condition needs to pass for the statement to be true.
// AND && - All conditions need to pass for the statement to be true.
const password = "wdp@";

// Checks if the condition passed.
// If both conditions pass, the statement is true.
if (password.length >= 12 && password.includes("@")) {
  console.log("That password is mighty strong!");
  // If the first if statement does not pass, execute the second if statement.
  // Executes both conditions, if 1 is true, the statement passes.
} else if (
  password.length >= 8 ||
  // When chaining conditions, seperate the code to make it more understandable.
  // If both conditions below pass, the right side of the || is true.
  (password.includes("@") && password.length > 5)
) {
  console.log("That password is strong enough!");
  // If the if statements above does not pass, the else clause is executed.
} else {
  console.log("Password is not strong enough!");
}
