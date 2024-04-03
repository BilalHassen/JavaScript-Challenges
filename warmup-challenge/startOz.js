/* Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present),
however include first char only if it is 'o'
 and include the second only if it is 'z', so 'ozymandias' yields 'oz'.*/

function startOz(str) {
  if (str.charAt(0) === "o" && str.charAt(1) === "z") {
    return str.charAt(0) + str.charAt(1);
  } else if (str.charAt(0) === "o") {
    return str.charAt(0);
  } else if (str.charAt(1) === "z") {
    return str.charAt(1);
  } else {
    return "";
  }
}

console.log(startOz("abc"));

// shorter solution
// function startOz(str) {
//   return (
//     (str.charAt(0) === "o" ? "o" : "") + (str.charAt(1) === "z" ? "z" : "")
//   );
// }
