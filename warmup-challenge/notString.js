/*Warmup-1 -- notString
Given a string, return a new string where "not " 
has been added to the front. However, if the string already begins with "not", 
return the string unchanged.*/

function notString(str) {
  let not = "not";
  let splitStr = str.split(" ");
  console.log(splitStr);

  if (!str.includes(not)) {
    return not + " " + str;
  } else if (splitStr[0] !== not) {
    return not + " " + str;
  } else if (splitStr[0] === not) {
    return str;
  } else if (splitStr[0].includes(not)) {
    console.log("ran");
    return splitStr;
  }
}

// concise version below

// function notString(str) {
//   let not = "not";

//   if (!str.startsWith(not)) {
//     return not + " " + str;
//   } else {
//     return str;
//   }
// }
