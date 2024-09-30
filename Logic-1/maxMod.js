/*
Logic-1 -- maxMod5
Given two int values, 
return whichever value is larger.
 However if the two values have the same remainder 
 when divided by 5, 
 then the return the smaller value. 
 However, in all cases, 
 if the two values are the same, 
 return 0. 
 Note: the % "mod" operator computes the remainder,
  e.g. 7 % 5 is 2.
*/

function maxMod5(a, b) {
  if (a === b) {
    return 0;
  }

  if (a % 5 === b % 5 && a < b) {
    return a;
  } else if (b % 5 === a % 5 && b < a) {
    return b;
  }

  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxMod5(2, 2));
