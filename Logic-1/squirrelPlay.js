/*
Logic-1 -- squirrelPlay
The squirrels in Palo Alto spend most of the day playing.
 In particular, they play if the temperature is between 60 and 90 (inclusive). 
 Unless it is summer, then the upper limit is 100 instead of 90. 
 Given an int temperature and a boolean isSummer, 
 return true if the squirrels play and false otherwise.
*/

// function squirrelPlay(temp, isSummer) {
//   if (temp >= 60 && temp <= 90) {
//     return true;
//   } else if (isSummer === true && temp >= 60 && temp <= 100) {
//     return true;
//   }

//   return false;
// }

// shorter version
function squirrelPlay(temp, isSummer) {
  let upperLimit = isSummer ? 100 : 90;
  return temp >= 60 && temp <= upperLimit;
}
