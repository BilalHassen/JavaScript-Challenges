/*
String-1 -- left2
Given a string, 
return a "rotated left 2" version where the first 2 chars are moved to the end. 
The string length will be at least 2.
*/

function left2(str) {
  let firstTwo = str.slice(0, 2);
  let restOfStr = str.substring(2, str.length);

  return `${restOfStr}${firstTwo}`;
}

console.log(left2("Hello"));
