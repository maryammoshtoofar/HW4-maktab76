// Ex.9
// Write a JavaScript function to hide email addresses to protect
// from unauthorized users.
// Test Data:
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function hideEmail(email) {
  const splitted = email.split("@");
  let spl1 = splitted[0];
  spl1 = spl1.substring(0, spl1.length - spl1.length / 2);
  const spl2 = splitted[1];
  return spl1 + "...@" + spl2;
}

console.log(hideEmail("robin_singh@example.com"));
