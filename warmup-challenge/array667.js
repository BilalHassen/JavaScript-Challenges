/* 
Warmup-2 -- array667
Given an array of ints, 
return the number of times that two 6's are next to each other in the array. 
Also count instances where the second "6" is actually a 7.
*/

// function array667(nums) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 6 && nums[i + 1] === 6 && nums[i] + nums[i + 1] === 12) {
//       console.log(nums[i] + nums[i + 1]);
//       count += 1;
//     }

//     if (nums[i] === 6 && nums[i + 1] === 7 && nums[i] + nums[i + 1] === 13) {
//       console.log(nums[i] + nums[i + 1]);
//       count += 1;
//     }
//   }

//   return count;
// }

// concise version

function array667(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] === 6 && nums[i + 1] === 6) ||
      (nums[i] === 6 && nums[i + 1] === 7)
    ) {
      console.log(nums[i] + nums[i + 1]);
      count += 1;
    }
  }

  return count;
}

console.log(array667([6, 6, 2]));
