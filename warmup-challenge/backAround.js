/*Warmup-1 -- backAround
Given a string, take the last char and return a new string
 with the last char added at the front and back, so 'cat' yields 'tcatt' 
 The original string will be length 1 or more.
 */

function backAround(str) {
  const lastchar = str.charAt(str.length - 1);
  return lastchar + str + lastchar;
}
