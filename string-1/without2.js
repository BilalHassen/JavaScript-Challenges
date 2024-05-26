/*String-1 -- without2
Given a string, 
if a length 2 substring appears at both its beginning and end, 
return a string without the substring at the beginning, 
so "HelloHe" yields "lloHe". 
The substring may overlap with itself, so "Hi" yields "".
 Otherwise, return the original string unchanged.*/

function without2(str) {
  let lastTwo = str.substring(str.length - 2);
  let firstTwo = str.substring(0, 2);

  if (firstTwo === lastTwo && str.length > 1) {
    return str.substring(2);
  }

  return str;
}

console.log(without2("x"));
