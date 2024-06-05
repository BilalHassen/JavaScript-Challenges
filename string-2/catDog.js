/*String-2 -- catDog
Return true if the string "cat" and "dog" 
appear the same number of times in the given string. */

function catDog(str) {
  let strArray = str.split("");

  let dogStrCounter = 0;
  let catStrCounter = 0;
  console.log(strArray);
  for (let i = 0; i < strArray.length - 2; i++) {
    if (str[i] + str[i + 1] + str[i + 2] === "dog") {
      dogStrCounter += 1;
    }
    if (str[i] + str[i + 1] + str[i + 2] === "cat") {
      catStrCounter += 1;
    }
  }

  return dogStrCounter === catStrCounter;
}

console.log(catDog("catdog"));

function catDog(str) {
  // Using match to find all occurences of cat and dog
  let catMatches = str.match(/cat/g) || [];
  let dogMatches = str.match(/dog/g) || [];

  return catMatches.length === dogMatches.length;
}
