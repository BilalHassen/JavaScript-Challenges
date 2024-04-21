/*
Warmup-2 -- stringBits
Given a string, return a new string 
made of every other char starting with the first, 
so "Hello" yields "Hlo".
*/

function stringBits(str) {
  let other = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i + i] === undefined) {
        console.log("i ran ")
      break;
    } else {
      other = other + str[i + i];
    }
  }
  return other;
}

console.log(stringBits("hello"));
