/*
Warmup-2 -- has271
Given an array of ints, return true if it contains a 2, 7, 1 pattern
 -- a value, followed by the value plus 5, 
 followed by the value minus 1. 
 Additionally the 271 counts even if the "1" 
 differs by 2 or less from the correct value
*/

function has271(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 1] === 5 && nums[i + 2] - nums[i] === 1) {
      console.log("first if");
      return true;
    }

    if (nums[i] === 2) {
      if (nums[i + 1] - nums[i] === 5 && nums[i] - nums[i + 2] === 1) {
        return true;
      }
    }
  }

  return false;
}

console.log(has271([2, 7, 1]));
