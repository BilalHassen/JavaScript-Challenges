/*
Logic-1 -- inOrderEqual
Given three ints, a b c, 
return true if they are in strict increasing order,
 such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7.
  However, with the exception that if "equalOk" is true,
   equality is allowed, such as 5 5 7 or 5 5 5.
*/

function inOrderEqual(a, b, c, equalOk) {
  if (b > a && c > b) {
    return true;
  }

  if (equalOk === true && (b > a || b === a) && (c > b || c === b)) {
    return true;
  }
  return false;
}

console.log(inOrderEqual(5, 5, 7, true));
