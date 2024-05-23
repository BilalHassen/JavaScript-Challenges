/*
String-1 -- twoChar
Given a string and an index, 
return a string length 2 starting at the given index. 
If the index is too big or too small to define a string length 2,
 use the first 2 chars. The string length will be at least 2.
*/

function twoChar(str, index) {
  let subStr = str.substring(index, index + 2);

  if (subStr.length < 2) {
    return str.substring(0, 2);
  } else {
    return subStr;
  }
}

console.log(twoChar("hello", 99));
