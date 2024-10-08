/*
Logic-1 -- blueTicket
You have a blue lottery ticket, 
with ints a, b, and c on it. 
This makes three pairs, 
which we'll call ab, bc, and ac. 
Consider the sum of the numbers in each pair. 
If any pair sums to exactly 10, the result is 10.
 Otherwise if the ab sum is exactly 10 more than either bc or ac sums, 
 the result is 5. Otherwise the result is 0.
*/

function blueTicket(a, b, c) {
  console.log(a + b - a + c);
  console.log(a + b - b + c);

  if (a + b === 10 || b + c === 10 || a + c === 10) {
    return 10;
  } else if (a + b - (a + c) === 10 || a + b - (b + c) === 10) {
    return 5;
  } else {
    return 0;
  }
}

console.log(blueTicket(5, 5, 5));
