// Ex. 1
// Write a JavaScript program to compute the exponent of a number
// PS:use Recursion

function calcExponent(number, exponent) {
  if (exponent === 0) return 1;
  return number * calcExponent(number, exponent - 1);
}

console.log(calcExponent(2, 6));
