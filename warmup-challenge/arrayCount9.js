/*
Warmup-2 -- arrayCount9
Given an array of ints, return the number of 9's in the array.
*/

function arrayCount9(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] === 9) {
      count += 1;
    }
  }
  return count;
}

console.log(arrayCount9([1, 9, 9, 3, 9]));
