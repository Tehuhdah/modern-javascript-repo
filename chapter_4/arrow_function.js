// 18:10

// Regular Function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// Arrow Function
// A new newer and shorter way of creating a function.
// No need for paranthesis if there is only 1 parameter.
// If there is no parameters or more than 1 parameter, paranthesis are required.
// If we have a single return statement, it can placed after the arrow and we can remove the curly braces.
const calcArea = (radius) => 3.14 * radius ** 2;

// Old Arrow Function
// consts calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// }

const area = calcArea(5);
console.log("area is: ", area);

// Practice arrow functions

// Regular Functions
// const greet = function () {
//   return "Hello, World!";
// };

// const bill = function (products, text) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] * tax + products[i];
//   }
//   return total;
// };

// Arrow Function converted from Regular Function
const greet = () => "Hello, World";
const result = greet();
console.log(result);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
