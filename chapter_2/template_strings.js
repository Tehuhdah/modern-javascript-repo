// 46:10
// Template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// Concatenation way
// let result = "The blog called " + title + " by " + author + " has " + likes + " likes";

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);
