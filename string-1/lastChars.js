/*
String-1 -- lastChars
Given 2 strings, a and b, 
return a new string made of the first char of a and the last char of b, 
so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char.
*/

function lastChars(a, b) {
  if (a.length === 0 && b.length === 0) {
    return "@@";
  } else if (a.length === 0) {
    return `@${b[b.length - 1]}`;
  } else if (b.length === 0) {
    return `${a[0]}@`;
  }

  return `${a[0]}${b[b.length - 1]}`;
}

console.log(lastChars("", ""));
