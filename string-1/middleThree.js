/*
String-1 -- middleThree
Given a string of odd length, 
return the string length 3 from its middle, 
so "Candy" yields "and". The string length will be at least 3.
*/

function middleThree(str) {
  let halfLength = str.length / 2;
  return str.substring(halfLength - 1, halfLength + 2);
}

console.log(middleThree("candy"));
