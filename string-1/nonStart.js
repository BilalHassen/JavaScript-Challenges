/*
String-1 -- nonStart
Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
*/

function nonStart(a, b){
  return `${a.slice(1)}${b.slice(1)}`
}

console.log(nonStart('Hello', "there"))