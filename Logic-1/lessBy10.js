/*
Logic-1 -- lessBy10
Given three ints, a b c, 
return true if one of them is 10 or more less than one of the others.
*/

function lessBy10(a, b, c) {
  return (
    a - b >= 10 ||
    a - c >= 10 ||
    b - a >= 10 ||
    b - c >= 10 ||
    c - a >= 10 ||
    a - c >= 10 ||
    c - b >= 10
  );
}
