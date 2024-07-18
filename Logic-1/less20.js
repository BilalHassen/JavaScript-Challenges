/*
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. 
So for example 38 and 39 return true, but 40 returns false.
*/

function less20(n) {
  let num2 = n + 1;
  let num1 = n + 2;

  if (num1 % 20 === 0 || num2 % 20 === 0) {
    return true;
  }

  return false;
}

console.log(less20(18));
