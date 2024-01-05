// 2:20

// Object Literals

// Created a user object with property,
// name, age, email, location, and blogs.
let user = {
  name: "Jhordan",
  age: 20,
  email: "jtejada2@academic.rrc.ca",
  location: "Winnipeg",
  blogs: ["Why Mac & Cheese is Good", "10 reasons to go gym."],
};

// logging the entire user object.
console.log(user);

// Extracting name using dot notation and bracket notation.
console.log(user.name);
console.log(user["name"]);

// Updating the age of the user using both dot and bracket notation.
user.age = 21;
user["age"] = 20;

console.log(user.age);
console.log(user["age"]);

// log the type of user to the console.
console.log(typeof user); // object
