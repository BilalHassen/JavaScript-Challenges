/*
Given 2 ints, a and b, return their sum. 
However, "teen" values in the range 13..19 inclusive,
 are extra lucky. So if either value is a teen, just return 19.
*/

function teenSum(a, b) {
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
    return 19;
  }

  return a + b;
}
