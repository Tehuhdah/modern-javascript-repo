// 13:30

// Returning Values

// Creating a calcArea function that thats in a parameter 'radius'
// and uses that to calculate the area and return the result.
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

// Store the result from calcArea(5) into a constant.
const area = calcArea(5);
console.log(area);
