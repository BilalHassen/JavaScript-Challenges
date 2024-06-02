/*
String-2 -- doubleChar
Given a string,
 return a string where for every 
 char in the original, there are two chars.
*/

function doubleChar(str) {
  let strArray = str.split("");
  let newStr = "";

  let doubled = strArray.map((char) => {
    newStr = newStr + char + char;
  });

  return newStr;
}

console.log(doubleChar("The"));
