/*
String-1 -- withoutX
Given a string, 
if the first or last chars are 'x',
 return the string without those 'x' chars,
  and otherwise return the string unchanged.
*/

function withoutX(str) {
  if (str[0] === "x" && str[str.length - 1] === "x" && str.length > 1) {
    console.log("first if");
    return str.substring(1, str.length - 1);
  } else if (str[str.length - 1] === "x" && str[0] !== "x") {
    console.log("second if");
    return str.substring(0, str.length - 1);
  } else if (str[0] === "x" && str[str.length - 1] !== "x") {
    return str.substring(1, str.length);
  } else if (str[0] === "x" && str.length === 1) {
    return "";
  } else if (str[0] === "x" && str.length === 1) {
    return "";
  }

  return str;
}

console.log(withoutX("x"));
