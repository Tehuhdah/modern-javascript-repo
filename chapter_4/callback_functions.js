// 31:00

// Callbacks & Foreach

// A callback function is a function passed into another function as an argument.
// This callback function can then be invoked inside the outer function to complete some kind of action or routine.

// Here, 'myFunc' is a function that accepts a callback function as its parameter.
const myFunc = (callbackFunc) => {
  // Do Something
  let value = 50;
  // Here, we're invoking the callback function that was passed into 'myFunc',
  // and we're passing 'value' into it.
  callbackFunc(value);
};

// Here, we're calling 'myFunc' and passing in a callback function as its argument.
// This callback function takes one parameter 'value', and logs it to the console.
myFunc((value) => {
  // Do Something
  console.log(value);
});

let people = ["Jhordan", "Luigi", "Mario", "Yoshi", "Toad"];

// Creating a logPerson function that takes in a 'person', and 'index'
// parameter to be used in the function as we wish to log the person, and it's index.
const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`);
};

// Here, we are calling the forEach method on the people's array and passing
// logPerson as an argument. This calls the logPerson method for each person
// in the peoples array and returns a greeting message for that person.
people.forEach(logPerson);
