// 22:40

// Math Object

// Logging all of the methods and properties of the math object.
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// Math.round - rounds the number to the nearest integer.
console.log(Math.round(area));

// Math.floor - rounds the number down to the nearest integer.
console.log(Math.floor(area));

// Math.ceil - rounds the number up to the nearest integer.
console.log(Math.ceil(area));

// Math.trunc - takes away the decimal while leaving the integer.
console.log(Math.trunc(area));

// Random Numbers

// Returns a random number. 0-1
const random = Math.random();

console.log(random);

// Random number between 0 and 100.
console.log(Math.round(random * 100));
