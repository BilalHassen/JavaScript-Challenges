/*
String-1 -- frontAgain
Given a string, 
return true if the first 2 chars in the string also appear at the end of the string, 
such as with "edited".
*/

function fontAgain(str) {
  return str[0] + str[1] === str[str.length - 2] + str[str.length - 1];
}

console.log(fontAgain("edited"));
