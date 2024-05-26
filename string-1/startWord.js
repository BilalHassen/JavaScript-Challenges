/*
String-1 -- startWord
Given a string and a second "word" string, 
we'll say that the word matches the string if it appears at the front of the string,
 except its first char does not need to match exactly. 
 On a match, return the front of the string, 
 or otherwise return the empty string. 
 So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". 
 The word will be at least length 1.
*/

function startWord(str, word) {
  let firstChar = word.substring(1, word.length);
  if (str.includes(word)) {
    return str.substring(0, word.length);
  } else if (str.includes(firstChar) && str.length > 0) {
    return str[0] + firstChar;
  }

  if (str.length === 0 && word.length >= 1) {
    console.log("ran");
    return "";
  }

  return "";
}

console.log(startWord("", "i"));
