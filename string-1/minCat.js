/**
 
String-1 -- minCat
Given two strings, 
append them together (known as "concatenation") 
and return the result. 
However, if the strings are different lengths, 
omit chars from the longer string 
so it is the same length as the shorter string.
 So "Hello" and "Hi" yield "loHi". 
 The strings may be any length.
 */

function minCat(a, b) {
  let aLength = a.length;
  let bLength = b.length;

  if (aLength > bLength) {
    let lengthDifference = aLength - bLength;
    return a.slice(lengthDifference) + b;
  } else if (bLength > aLength) {
    let lengthDifference = bLength - aLength;
    return a + b.slice(lengthDifference);
  }
}

console.log(minCat("java", "hello"));
