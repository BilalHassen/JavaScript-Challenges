/* intMax
Given three int values, a b c, return the largest.*/

function intMax(a, b, c) {
  if (a > b || a > c) {
    return a;
  }

  if (b > a || b > c) {
    return b;
  }

  if (c > b || c > a) {
    return c;
  }
}

// shorter version
// function intMax(a, b, c) {
//   return Math.max(a, b, c);
// }
