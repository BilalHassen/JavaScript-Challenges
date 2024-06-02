/*
String-1 -- withoutX2
Given a string, 
if one or both of the first 2 chars is 'x', 
return the string without those 'x' chars, 
and otherwise return the string unchanged. 
This is a little harder than it looks.
*/

function withoutX2(str) {
  if (str[0] === "x" && str[1] === "x") {
    return str.substring(2);
  } else if (str[0] !== "x" && str[1] === "x") {
    return str.substring(0, 1) + str.substring(2);
  } else if (str[1] !== "x" && str[0] === "x") {
    return str.substring(1, 2) + str.substring(2);
  }

  return str;
}

console.log(withoutX2("xHi"));
