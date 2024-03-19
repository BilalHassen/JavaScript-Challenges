/*
Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21,
 except return double the absolute difference if n is over 21.
*/

function diff21(n) {
  const absDifference = 21 - n;
  if (n <= 21) {
    return absDifference;
  } else {
    let double = n - 21;
    return double * 2;
  }
}

console.log(diff21(21));
