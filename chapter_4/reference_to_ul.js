// 39:00

// Get a reference to a specific ul tag by passing the class the ul tag is apart of.
const ul = document.querySelector(".people");

const people = ["Jhordan", "Luigi", "Mario", "Yoshi", "Toad"];

// Create a empty template literal to append to.
let html = ``;

// The forEach method is being called on the 'people' array.
// For each 'person' in the array, an arrow function is executed.
// This function appends a new list item to the 'html' string for each 'person'.
people.forEach((person) => {
  // The 'html' string is appended with a list item element.
  // The content of the list item is the current 'person', and the text color is set to purple.
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

// Append the completed 'html' string (which contains all the li elements) to the ul
ul.innerHTML = html;
