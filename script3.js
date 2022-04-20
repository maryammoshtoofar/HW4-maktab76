// Ex.3
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function upperCase(string) {
  let sentence = string.split(" ");
  return sentence
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}
console.log(upperCase("the quick brown fox"));
