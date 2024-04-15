/*
Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars are now in upper case. 
If the string has less than 3 chars, uppercase whatever is there.
 Note that str.toUpperCase() returns the uppercase version of a string.
*/

function endUp(str) {
  let lastThree = str.substr(length - 3).toUpperCase();
  let slicedStr = str.slice(0, length - 3);

  if (str.length > 3) {
    return slicedStr + lastThree;
  } else {
    return lastThree;
  }
}
