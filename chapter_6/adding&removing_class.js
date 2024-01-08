// 42:00

// Adding and Removing class.

const content = document.querySelector("p");

// Logs the class list of the content element.
console.log(content.classList);
// In css the latest class and its changes will override all similar styling to the previous class.
// Adding a class to the content element.
content.classList.add("success");

// Removing a class from the content element.
content.classList.remove("success");

// Challenge 46:06

// If elements are within a div tag with a specific class, use the class selector (dot notation) followed by
// the element you wish to select.
const paras = document.querySelectorAll("div.challenge p");

// Used the forEach method to iterate through each para in paras.
// Check if the innerHTML includes 'success' or 'error'.
// add 'success' or 'error' based on the check.
paras.forEach((para) => {
  if (para.innerHTML.includes("success")) {
    para.classList.add("success");
  }
  if (para.innerHTML.includes("error")) {
    para.classList.add("error");
  }
});

/* Net Ninja's answer
paras.forEach((para) => {
  if (para.textContent.includes("success")) {
    para.classList.add("success");
  }
  if (para.textContent.includes("error")) {
    para.classList.add("error");
  }
});
*/

// 'innerHTML' returns the HTML content within an element. It includes all HTML tags as strings.
// For example, if a paragraph contains bold text, 'innerHTML' will include the '<strong>' tags.

// 'innerText' returns the visible text contained in a node, while ignoring all HTML tags.
// It approximates what a user would see when looking at the webpage.
// However, it's worth noting that 'innerText' is a non-standard property and may behave inconsistently across different browsers.

// 'textContent' returns all text within a node, including 'display: none' or 'visibility: hidden' text,
// and even script and style content. It ignores all HTML tags, returning just the text content.
// It's a standard property and behaves consistently across different browsers.
// In this case, 'textContent' is used to check if the text of the paragraph includes 'success' or 'error'.

// 51:40

// Toggling classes

const title = document.querySelector(".page-title");

// Toggles the test class onto the title element.
// Usually used for testing purposes.
title.classList.toggle("test");
