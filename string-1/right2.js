/*
 String-1 -- right2
Given a string, return a "rotated right 2" 
version where the last 2 chars are moved to the start. 
The string length will be at least 2.
 */

function right2(str) {
  return (
    str.substring(str.length - 2, str.length) + str.slice(0, str.length - 2)
  );
}

console.log(right2("hello"));
