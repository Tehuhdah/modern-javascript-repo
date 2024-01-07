// 15:30

// Get an element by ID.
const title = document.getElementById("page-title");
console.log(title);

// Get an element by their class name.

// When using the getElements method, when returning multiple elements, it
// stores them into an HTMLCollection, not a NodeList.
// Change const to let, so we can convert the HTMLCollection to an array later on.
let errors = document.getElementsByClassName("error");
console.log(errors);

// log the first element with class name 'error'.
console.log(errors[0]);

// forEach is not a function of an HTMLCollection.
// You can convert the HTMLCollection into an array to use array functions.
errors = Array.from(errors);
errors.forEach((error) => {
  console.log(error);
});

// Get an element by their tag name.
const paras = document.getElementsByTagName("p");
console.log(paras);
