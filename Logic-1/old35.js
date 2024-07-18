/**Return true
 * if the given non-negative number is a multiple of 3 or 5,
 *  but not both. Use the % "mod" operator.
 */

function old35(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return false;
  } else if (n % 3 !== 0 && n % 5 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(old35(3));
