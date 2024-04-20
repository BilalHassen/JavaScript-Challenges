/*
Warmup-2 -- stringTimes
Given a string and a non-negative int n, 
return a larger string that is n copies of the original string.
*/


// solution without using repeat() method
function stringTimes(str, n){
    let newStr = ""

    let finalStr = ""
  for(let i = 0; i < str.length; i++){
  newStr = newStr + str[i] 
    console.log(newStr);

    let newerString = ""

    for(let i = 0; i < n; i++){
        console.log(newStr)
        newerString = newerString + newStr
    }

    finalStr = newerString
}
    return finalStr;   
  

}

