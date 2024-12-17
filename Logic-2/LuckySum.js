/*
Logic-2 -- luckySum
Given 3 int values, a b c, return their sum. However,
 if one of the values is 13 then it does not count towards
  the sum and values to its right do not count. 
  So for example, if b is 13, then both b and c do not count.
*/
function luckySum(a, b, c) {
  const nums = [a, b, c];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      break;
    }
    sum += nums[i];
  }
  return sum;
}
console.log(luckySum(12, 11, 13));
