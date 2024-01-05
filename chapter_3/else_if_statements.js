// 22:00

// else if statements

const password = "passwordpassword";

// Checks if the condition passed.
if (password.length >= 12) {
  console.log("That password is mighty strong!");
  // If the first if statement does not pass, execute the second if statement.
} else if (password.length >= 8) {
  console.log("That password is long enough!");
  // If the if statements above does not pass, the else clause is executed.
} else {
  console.log("Password is not long enough!");
}
