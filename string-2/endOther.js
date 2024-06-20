/*
String-2 -- endOther
Given two strings, 
return true if either of the strings appears at the very end of the other string, 
ignoring upper/lower case differences 
(in other words, the computation should not be "case sensitive").
 Note: str.toLowerCase() returns the lowercase version of a string.
*/

function endOther(a, b) {
  let lenthADifference = a.length - b.length;

  let lengthBdifference = b.length - a.length;

  if (
    a.length > b.length &&
    a.toLowerCase().slice(lenthADifference, a.length) === b
  ) {
    return true;
  } else if (
    b.length > a.length &&
    b.toLowerCase().slice(lengthBdifference, b.length) === a.toLowerCase()
  ) {
    return true;
  } else if (a.length === b.length && a === b) {
    return true;
  }

  return false;
}

console.log(endOther("Abc", "aBc"));
