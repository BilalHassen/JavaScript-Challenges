/*
Warmup-2 -- array123
Given an array of ints, 
return true if the sequence of numbers 1, 2, 3 
appears in the array somewhere.
*/

function array123(nums){
  for(let i = 0; i < nums.length - 2; i++){
    console.log(nums[i + 1])
   if(nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3){
    return true; 
   }
  }
  return false;
  
}

console.log(array123([9,0,2,6,7,8,5,1,2,3])); // This array has only 2 elements
