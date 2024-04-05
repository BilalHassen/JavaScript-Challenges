/*
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, 
or return 0 in the event of a tie. 
Note that Math.abs(n) returns the absolute value of a number.
*/

// solution witout using math.abs

function close10(a, b) {
  if (a <= 10 && b - 10 > 10 - a) {
    return a;
  } else if (a > 10 && a - 10 > 10 - b) {
    return b;
  } else if (a - 10 === 10 - b || b - 10 === 10 - b) {
    return 0;
  } else if (a === b) {
    return 0;
  }
}
