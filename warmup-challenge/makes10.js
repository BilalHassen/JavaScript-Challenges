/*
Warmup-1 -- makes10
Given 2 ints, a and b, return true if one if them is 10 
or if their sum is 10
*/

function makes10(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10 || b + a === 10) {
    return true;
  } else {
    return false;
  }
}

// function makes10(a, b) {
//   return a === 10 || b === 10 || a + b === 10;
// }
