/*Warmup-1 -- startHi
Given a string, 
return true if the string starts with 'hi'
and false otherwise */

function startHi(str) {
  return str[0] === "h" && str[1] === "i";
}

console.log(startHi("hello hi"));
