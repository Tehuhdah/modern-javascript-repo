// 1:01:00

let age;

// age returns undefined since we did not assign it a value.
// NaN error occurs as well since we try to add a number to an undefined variable.
console.log(age, age + 3, `the age is ${age}`);

age = null;

// age returns null since we assigned it a value of null.
// null takes on a value of 0 in a formula. result in age + 3 = 3.
console.log(age, age + 3, `the age is ${age}`);

// Null - A special value that represents "no value" or "no object". It's often
// used to indicate that a variable should have no value, which can be useful
// when you want to explicitly clear or reset a variable.
