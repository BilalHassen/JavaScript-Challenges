/*
Warmup-2 -- last2
Given a string, 
return the count of the number of times that 
a substring length 2 appears in the string and also as the last 2 chars of the string, 
so "hixxxhi" yields 1 (we won't count the end substring).
*/

function last2(str) {
  let pair = "";
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    pair = str[i] + str[i + 1];
    if (str.substr(str.length - 2) === pair) {
      if (pair === pair) {
        count++;
      }
    }
  }

  return count;
}

console.log(last2("hixxhi"));


