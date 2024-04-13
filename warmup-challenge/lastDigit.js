/*
Warmup-1 -- lastDigit
Given two non-negative int values, 
return true if they have the same last digit,
 such as with 27 and 57. 
 Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.
*/
function lastDigit(a, b) {
  let aString = a.toString();
  let bString = b.toString();

  let lastDigitAString = parseInt(aString[aString.length - 1]);
  let lastDigitBString = parseInt(bString[bString.length - 1]);

  return lastDigitAString === lastDigitBString;
}

//shorter version

// function lastDigit(a, b) {
//   return a % 10 === b % 10;
// }
