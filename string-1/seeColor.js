/*
String-1 -- seeColor
Given a string, 
if the string begins with "red" or "blue" return that color string,
 otherwise return the empty string.
*/

function seeColor(str) {
  if (str.slice(0, 3) === "red") {
    return str.slice(0, 3);
  } else if (str.slice(0, 4) === "blue") {
    return str.slice(0, 4);
  }

  return "";
}

console.log(seeColor("xxred"));
