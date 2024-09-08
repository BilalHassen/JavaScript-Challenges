/*
Logic-1 -- inOrder
Given three ints, a b c, 
return true if b is greater than a, and c is greater than b. 
However, with the exception that if "bOk" is true,
 b does not need to be greater than a.
*/

function inOrder(a, b, c, bOk) {
  if (bOk === true && (b <= a || b >= a)) {
    return true;
  } else if (b > a && c > b) {
    return true;
  }

  return false;
}
