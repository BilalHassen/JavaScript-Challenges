/*
Warmup-2 -- stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode"
*/

function stringSplosion(str){
    let splosion  = ""
  for(let i = 0; i < str.length; i++){
    splosion = splosion + str.substring(0, i + 1);
    console.log(splosion);
  }
  
 return splosion
}

console.log(stringSplosion("Code"));