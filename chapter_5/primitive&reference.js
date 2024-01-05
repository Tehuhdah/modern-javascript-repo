// 34:00

// Primitive Values

// Primitive values are data that are stored directly in the location the variable accesses.
// They are simple data types like numbers, strings, booleans, null, undefined, and symbols.
// When you assign a primitive value to a new variable, it creates a copy of that value.

let scoreOne = 50; // scoreOne is a variable that holds a primitive value.

// Assigns the value of 'scoreOne' to 'scoreTwo'. This creates a new copy of the value in the stack.
// 'scoreTwo' and 'scoreOne' are separate variables, each holding a copy of the value.
// Changes to one will not affect the other because primitive values in JavaScript are passed by value, not by reference.
let scoreTwo = scoreOne;

// Outputs scoreOne: 50, scoreTwo: 50
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reassigning the value of scoreOne to 100;
// This does not affect any copies created previously on scoreOne.
scoreOne = 100;

// Outputs scoreOne: 100, scoreTwo: 50
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Values
// Reference values are objects (including arrays and functions) that are accessed by reference.
// When you assign a reference value to a new variable, it doesn't create a new object.
// Instead, it creates a reference to the original object. Changes to the object affect all references.

const userOne = { name: "Jhordan", age: 30 }; // userOne is a variable that holds a reference value.

// Creating a copy of an object does not create an entirely new object in the heap,
// it creates a pointer to the original object in the heap.
const userTwo = userOne;

console.log(userOne, userTwo);

// Reassigning the value of userOne.age to 40.
// This affects all copies as it references the same object in the heap.
userOne.age = 40;
console.log(userOne, userTwo);

// Reassigning the value of userTwo.age to 60.
// This affects all copies as it references the same object in the heap.
userTwo.age = 60;
console.log(userOne, userTwo);
