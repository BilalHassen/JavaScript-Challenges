/*
String-1 -- lastTwo
Given a string of any length, 
return a new string where the last 2 chars, 
if present, are swapped, so "coding" yields "codign".
*/

function lastTwo(str) {
  let swappedOne = str.substring(str.length - 2);
  if (str.length >= 2) {
    return str.slice(0, str.length - 2) + (swappedOne[1] + swappedOne[0]);
  }
  return str;
}
