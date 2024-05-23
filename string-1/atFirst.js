/*
String-1 -- atFirst
Given a string, 
return a string length 2 made of its first 2 chars. 
If the string length is less than 2, use '@' for the missing chars.
*/

function atFirst(str) {
  if (str.length >= 2) {
    return str.substring(0, 2);
  } else if (str.length < 2 && str.length > 0) {
    return `${str}@`;
  } else if (str.length === 0) {
    return "@@";
  }
}

console.log(atFirst(""));
