// Ex. 2
// Write a JavaScript program to compute the sum of an array of
// integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumOfArray(array) {
  let sum = 0;
  array.forEach((element) => (sum += element));
  return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));
