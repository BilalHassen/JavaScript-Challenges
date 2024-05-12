/*
String-1 -- firstTwo
Given a string, 
return the string made of its first two chars, 
so the String "Hello" yields "He". 
If the string is shorter than length 2, 
return whatever there is, so "X" yields "X", 
and the empty string "" yields the empty string "".
 Note that str.length() returns the length of a string.
*/


function firstTwo(str){
  if(str.length >= 2){
    return str.substring(0,2)
  } else if (str.length = 1){
    return str.substring(0)
  } else if(str.length = 0){
    return str.substring(0)
  }
}

console.log(firstTwo(""))