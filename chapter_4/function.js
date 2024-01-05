// 2:30

// Function Declaration:
// A function declaration defines a function with the specified parameters.
// A function declaration can be called both after and before it's defined because JavaScript moves all declarations to the top of the current scope,
// a process known as hoisting.
function greet() {
  console.log("hello there");
}

// Function Expression:
// A function expression is a function defined as part of an expression, often stored in a variable.
// Unlike function declarations, function expressions are not hoisted,
// which means they can't be called before they're defined.
const speak = function () {
  console.log("good day!");
};

greet();
greet();
greet();

speak();
speak();
speak();

/*
    For example, declaring the function after calling the function will work
    as it is hoisted to the top of the file before execution.
    
function great() {
    console.log("hello there");
}
*/
