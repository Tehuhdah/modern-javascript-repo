// 21:00

// Changing Text in Element

const para = document.querySelector("p");

// Logging the inner text of para which is the first 'p' tag in the DOM.
// console.log(para.innerText);

// Updates the innerHTML of para. This reflects on the DOM.
// para.innerHTML = "Jhordan is learning, ";
// Appends the text to the end of the innerHTML of para.
// para.innerHTML += "He is happy :)";

// Using querySelectorAll to extract all the 'p' tags in the DOM.
const paras = document.querySelectorAll("p");

// Using forEach on paras to iterate through the NodeList and log the innerHTML
// of each para in paras.
// Append a text to the end of the innerHTML for each para in paras.
paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " Text Text.";
});

// 25:30

// Changing HTML in Element

const content = document.querySelector(".content");

// Logging the innerHTMl of content which is the first tag in the content class.
console.log(content.innerHTML);

// Updates the HTML tag and innerHTML of content.
// content.innerHTML = "<h2>This is a new h2</h2>";

// Appends the HTML tag and innerHTML to the end of the innerHTML of content.
// This results in a new html element that gets added to the DOM.
content.innerHTML += "<h2>This is a new h2</h2>";

const people = ["Jhordan", "Luigi", "Yoshi"];

// Using forEach on the people to iterate through the people array to
// append a new 'p' tag that contains each person in people.
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
