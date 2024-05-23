/*
String-1 -- hasBad
Given a string, 
return true if "bad" appears starting at index 0 or 1 in the string, 
such as with "badxxx" or "xbadxx" but not "xxbadxx". 
The string may be any length, including 0.
*/

function hasBad(str) {
  return str.substring(0, 3) === "bad" || str.substring(1, 4) === "bad";
}

console.log(hasBad("xbadxx"));
