// Ex.4
// Write a JavaScript function to remove. 'null', '0', '""',
// 'false', 'undefined' and 'NaN' values from an array.

function removeFalsy(array) {
  return array.filter(
    (element) =>
      element !== null &&
      element !== 0 &&
      element !== "" &&
      element !== false &&
      element !== undefined &&
      !Number.isNaN(element)
  );
}
console.log(
  removeFalsy([
    1,
    2,
    3,
    4,
    null,
    0,
    76,
    "",
    "Hello World",
    [1, 2, [1, 2, 3]],
    false,
    (person = {}),
    NaN,
    true,
    undefined,
    NaN,
  ])
);
