// Ex.6
// Create a function Compute the sum of the rounded numbers in an
// array.
// Test data:
// const numbers = [15.5, 2.3, 1.1, 4.7];
// output=24
// use reduce

function sumRounded(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + Math.round(currentValue),
    0
  );
}

console.log(sumRounded([15.5, 2.3, 1.1, 4.7]));
