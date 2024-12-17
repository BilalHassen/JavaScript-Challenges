/*
We want to make a row of bricks that is goal inches long. 
We have a number of small bricks (1 inch each) 
and big bricks (5 inches each).
 Return true if it is possible to make the goal 
 by choosing from the given bricks. 
 This is a little harder than it looks and can be done without any loops.
  See also: Introduction to MakeBricks
*/

function makeBricks(small, big, goal) {
  let oneInch = small / 1;
  let fiveInch = big * 5;
  console.log(fiveInch / 2);

  if (oneInch + fiveInch === goal) {
    return true;
  } else if (fiveInch > goal) {
    return false;
  } else if (oneInch + fiveInch >= goal) {
    return true;
  } else {
    return false;
  }
}
console.log(makeBricks(3, 2, 8));
