// Ex.5
// Write a JavaScript function to merge two arrays and remove all
// duplicate elements.

function mergeArrays(array1, array2) {
  let merged = array1.concat(array2);
  return [...new Set(merged)];
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArrays(array1, array2));
