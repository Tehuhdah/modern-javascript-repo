// 45:00

// // Variables & block scope.

// // Let variables are global scope when declared outside any function or code block.
// // You cannot redefine the same variable in the same scope.
// let age = 30;
// let myName = "";

// if (true) {
//   // age is accessed in the if statement.
//   // If the variable you are reassigning is in global scope,
//   // It will update that global scope variable, meaning all instances
//   // of age will get updated unless it has been redefined in a seperate code block.
//   // age = 40;

//   // Redefining a variable inside a code block will only update that instance of the
//   // variable inside the code block creating a local scope for that variable.
//   let age = 40;
//   let myName = "Jhordan";
//   // We have access to name as it is in local scope of the code block.
//   console.log("Inside 1st code block: ", age, myName);

//   if (true) {
//     // We have access to age in the local scope as this if statement is apart of the
//     // scope of the outer if statement.
//     // If age was not defined in the outer if statement, we will take age from the global scope. age = 40

//     // If we redefine age in this code block, that age variable is now in this code blocks local scope.
//     let age = 50;
//     console.log("Inside 2nd clode block.", age);
//   }
// }

// // age is accessed outside of the if statement. (age = 40)
// // This instance of age is not affected. (let age = 40)
// // We do not have access to myName as it is not defined in global scope.
// console.log("outside code block: ", age, myName);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variables & block scope.

// Let variables are block scope. They are global when declared outside any function or code block.
// You cannot redefine the same variable in the same scope.
let age = 30;
let myName = "";

if (true) {
  // Here, we're declaring a new 'age' variable that is local to this block.
  // This does not affect the global 'age' variable.
  let age = 40;
  // Here, we're declaring a new 'myName' variable that is local to this block.
  let myName = "Jhordan";
  // We have access to 'age' and 'myName' as they are in the local scope of this code block.
  console.log("Inside 1st code block: ", age, myName);

  if (true) {
    // Here, we're declaring a new 'age' variable that is local to this block.
    // This does not affect the 'age' variable in the outer block or the global 'age' variable.
    let age = 50;
    console.log("Inside 2nd code block.", age);
  }
}

// Here, we're accessing the global 'age' and 'myName' variables.
// The 'age' variable in this scope is not affected by the 'age' variables in the inner blocks.
// The 'myName' variable is still an empty string because the 'myName' variable in the inner block does not affect it.
console.log("outside code block: ", age, myName);
