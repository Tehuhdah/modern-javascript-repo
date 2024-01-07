// 7:00

// Query Selector

// Use 'document.querySelector' to select the first 'p' element in the DOM.
const para = document.querySelector("p");

// Use 'document.querySelector' with a class selector to select the first element with the class 'error'.
const para2 = document.querySelector(".error");

// Use 'document.querySelector' with a tag and class selector to select the first 'div' element with the class 'error'.
const para3 = document.querySelector("div.error");

// You can also use 'document.querySelector' with a complex selector copied from the Elements tab in the browser's developer tools.
// This example selects the 'h1' element that is a direct child of the 'body' element.

const para4 = document.querySelector("body > h1");
console.log(para);
console.log(para2);
console.log(para3);
console.log(para4);

// Query Selector All

// Select all 'p' elements in the DOM and store them in the 'paras' NodeList.
const paras = document.querySelectorAll("p");

// Log the entire 'paras' NodeList to the console.
console.log(paras);
// Log the second 'p' element in the NodeList.
console.log(paras[1]);

// Use 'forEach' to iterate over each 'p' element in the NodeList and log it to the console.
paras.forEach((para) => {
  console.log(para);
});

// Select all elements with the class 'error' and store them in the 'errors' NodeList.
const errors = document.querySelectorAll(".error");
console.log(errors);

// Use 'forEach' to iterate over each element in the 'errors' NodeList and log its full HTML to the console.
errors.forEach((error) => {
  console.log(error.outerHTML);
});

// Use 'forEach' to iterate over each 'p' element in the 'paras' NodeList and log its full HTML to the console.
paras.forEach((para) => {
  console.log(para.outerHTML);
});
