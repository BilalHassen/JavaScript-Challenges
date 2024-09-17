/*
Logic-1 -- withoutDoubles
Return the sum of two 6-sided dice rolls, 
each in the range 1..6. However, 
if noDoubles is true, 
if the two dice show the same value, 
increment one die to the next value, 
wrapping around to 1 if its value was 6.
*/

function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles && die1 === die2) {
    if (die1 === 6 && die2 === 6) {
      return die1 + 1;
    }

    if (die1 < 6) {
      console.log("first nested if");
      return die1 + 1 + die2;
    } else if (die1 === 6) {
      return die1 === 0 + die2;
    }
    if (die2 < 6) {
      return die2 + 1 + die1;
    } else if (die2 === 6) {
      return die2 === 0 + die1;
    }
  }

  return die1 + die2;
}

console.log(withoutDoubles(6, 6, true));
