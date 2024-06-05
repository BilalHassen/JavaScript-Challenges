/*String-2 -- countHi
Return the number of times that the 
string "hi" appears anywhere in the given string.*/

function countHi(str) {
  let strArray = str.split("");

  let hiStringTracker = 0;

  for (let i = 0; i < strArray.length - 1; i++) {
    console.log(str[i], str[i + 1]);
    if (str[i] + str[i + 1] === "hi") {
      hiStringTracker += 1;
    }
  }
  return hiStringTracker;
}

console.log(countHi("hihi"));
