/*
Logic-2 -- loneSum
Given 3 int values, a b c, return their sum. 
However, if one of the values is the same as another of the values, 
it does not count towards the sum.
*/

function loneSum(a, b, c) {
  if (a !== b && a !== c && b !== a && b !== c && c !== a && c !== b) {
    return a + b + c;
  } else if (a !== b && a !== c && b === c) {
    return a;
  } else if (b !== a && b !== c && a === c) {
    return b;
  } else if (c !== a && c !== b && a === b) {
    return c;
  } else if (a === b && b === c) {
    return 0;
  }
}

console.log(loneSum(1, 1, 100));
