/*
Logic-2 -- noTeenSum
Given 3 int values, a b c, return their sum. However, 
if any of the values is a teen -- in the range 13..19 inclusive -- 
then that value counts as 0, except 15 and 16 do not count as a teens. 
Write a separate helper 
"public int fixTeen(int n)
 {"that takes in an int value and returns that value fixed for the teen rule. 
 In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). 
 Define the helper below and at the same indent level as the main noTeenSum().*/

function noTeenSum(a, b, c) {
  const nums = [a, b, c];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const isTeenRule = fixTeen(nums[i]);
    console.log(isTeenRule);
    sum += isTeenRule;
  }
  return sum;
}

console.log(noTeenSum(1, 13, 3));

function fixTeen(num) {
  if (num >= 13 && num <= 19 && num !== 15 && num !== 16) {
    return 0;
  }

  return num;
}
