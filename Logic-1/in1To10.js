/*
Logic-1 -- in1To10
Given a number n, return true if n is in the range 1..10,
 inclusive. Unless "outsideMode" is true, 
 in which case return true if the number is less or equal to 1,
  or greater or equal to 10.
*/

function in1To10(n, outsideMode) {
  if (outsideMode === false && n >= 1 && n <= 10) {
    console.log("first");
    return true;
  } else if (outsideMode === true && (n <= 1 || n >= 10)) {
    return true;
  }

  return false;
}

console.log(in1To10(9, true));
