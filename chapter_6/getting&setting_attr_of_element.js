// 31:00

// Getting attr of element

const link = document.querySelector("a");

// Get the href attribute of the 'a' element.
console.log(link.getAttribute("href"));

// Set the href attribute of the 'a' element.
link.setAttribute("href", "https://www.thenetninja.co.uk");

// innerText should be used when displaying all contents of the element.
// this means HTML tags are display as well
link.innerText = "TheNet Ninja website";

const mssg = document.querySelector("p");

// Get the class attribute of the 'p' element.
console.log(mssg.getAttribute("class"));

// Set the class attribute of the 'p' element.
mssg.setAttribute("class", "success");

// Adding a style attribute to the 'p' tag of the element.
mssg.setAttribute("style", "color: orange;");

// 36:30

// Setting Drawbacks

// Retrieving the h1 element with id 'page-title'
const title = document.querySelector("#page-title");

// Setting an attribute completely overrides all existing attributes on that element.
// title.setAttribute("style", "margin: 50px;");

// Logging all the css properties of the title element.
console.log(title.style);
// Logging the color property.
console.log(title.style.color);

// This allows you to add styles to elements without overriding existing attributes.
title.style.margin = "50px";
// Updating the color attribute of the title element to 'Crimson'.
title.style.color = "Crimson";

// If a css property contains a '-', use camel case to allow JavaScript to use that property.
// font-size -> fontSize
title.style.fontSize = "60px";

// To remove a style property, you must use an empty string to delete it.
title.style.margin = "";
