/*
String-1 -- middleTwo
Given a string of even length, 
return a string made of the middle two chars, 
so the string "string" yields "ri". The string length will be at least 2.

*/

function middleTwo(str) {
  let halfLength = str.length / 2;
  return str.substring(halfLength - 1, halfLength + 1);
}

console.log(middleTwo("practice"));
