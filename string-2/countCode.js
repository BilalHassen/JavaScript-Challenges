/*
String-2 -- countCode
Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

Examples

countCode('aaacodebbb') → 1
countCode('codexxcode') → 2
countCode('cozexxcope') → 2
*/

function countCode(str) {
  let count = 0;

  for (let i = 0; i < str.length - 3; i++) {
    if (str[i] + str[i + 1] + str[i + 3] === "coe") {
      count++;
    }
  }

  return count;
}

console.log(countCode("codexxcode"));
