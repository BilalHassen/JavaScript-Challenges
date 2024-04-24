/*
Warmup-2 -- arrayFront9
Given an array of ints, 
return true if one of the first 4 elements in the array is a 9. 
The array length may be less than 4.
*/

function arrayFront9(nums){
    let isNum9 = false;
  for(let i = 0; i <= 3; i++){
    console.log(nums[i]);
    if(nums[i] === 9){
        isNum9 = true;
    }
  }
  return isNum9;
}

console.log(arrayFront9([1,2,9,3,4]))

// shorter version 
// function arrayFront9(nums) {
//     return nums.slice(0, 4).includes(9);
//   }
  
//   console.log(arrayFront9([1, 2, 9, 3, 4]));
  