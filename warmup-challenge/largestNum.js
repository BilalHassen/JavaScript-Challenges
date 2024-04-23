
// find the largest number in an array 

function largestNum(nums){
    let largestNum = -Infinity;
    for(let i = 0; i <nums.length; i++){
        if(nums[i] > largestNum){
           largestNum = nums[i]
        }
    }
    return {largestNum};
    
}


console.log(largestNum([21, 99, 10, 130, 999, 29, 32, 97])); // Expected output: 130
console.log(largestNum([5, 8, 2, 11, 9])); // Expected output: 11
 console.log(largestNum([-3, -9, -5, -1])); // Expected output: -1
console.log(largestNum([0, 0, 0, 0])); // Expected output: 0
