// 9:00

// Define a function 'speak' that accepts a parameter 'name' and 'time'.
const speak = function (name, time) {
  // Uses the provided name, and time parameter to output a message.
  console.log(`Good ${time} ${name}.`);
};

// Must pass in an argument for the function to execute.
// Order of parameters must match those in the declaration.
speak("Jhordan", "Morning");

// Creating a function with default parameters for 'name' and 'time'
// We can override the default values.
const speak2 = function (name = "My King", time = "Night") {
  console.log(`Good ${time} ${name}. `);
};

speak2();
speak2("Jhordan", "Night");
