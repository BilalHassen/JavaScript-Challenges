/*Logic-1 -- love6
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

 */
function love6(a, b) {
  if (a - b === 6 || b - a === 6) {
    return true;
  } else if (a + b === 6 || b + a === 6) {
    return true;
  } else if (a === 6 || b === 6) {
    return true;
  }

  return false;
}
