/*
Warmup-1 -- frontBack
Given a string, return a new string where 
the first and last chars have been exchanged. */

function frontBack(str) {
  if (str.length === 1) {
    return str;
  } else {
    let char = str.substr(1, str.length - 2);
    return str.charAt(str.length - 1) + char + str.charAt(0);
  }
}

console.log(frontBack("s"));
