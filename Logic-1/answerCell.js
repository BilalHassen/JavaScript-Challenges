/*
Your cell phone rings. Return true if you should answer it.
 Normally you answer, 
 except in the morning you only answer if it is your mom calling.
 s In all cases, if you are asleep, you do not answer.
*/

function answerCell(isMorning, isMom, isAsleep) {
  // if true return false
  if (isAsleep) {
    return false;
  }

  // if is morning is true only answer if isMom === true
  if (isMorning) {
    return isMom;
  }

  // otherwise answer phone
  return true;
}

console.log(answerCell(true, true, true));
