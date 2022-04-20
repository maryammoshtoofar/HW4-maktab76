// Ex.7
// Write a JavaScript function to get the current date. Go to the
// editor
// Pass a separator as an argument.
// Test Data :
// console.log(curDay('/'));
// console.log(curDay('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

function curDay(date = new Date(), symbol = "/") {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return `${day}${symbol}${month}${symbol}${year}`;
}

console.log(curDay(new Date("11/13/2014"), "-"));
