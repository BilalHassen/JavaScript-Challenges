/*Logic-1 -- alarmClock
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, 
and a boolean indicating if we are on vacation, 
return a string of the form "7:00" 
indicating when the alarm clock should ring. Weekdays, 
the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be "10:00" 
and weekends it should be "off". */

function alarmClock(day, vacation) {
  if (day >= 1 && day < 6 && vacation === false) {
    return "7:00";
  } else if (day >= 1 && day < 6 && vacation === true) {
    console.log("ran");
    return "10:00";
  }

  // parantheses allows the first condition to be evaluated first
  if ((day === 6 || day === 0) && vacation === false) {
    console.log("runner");
    return "10:00";
  } else if ((day === 6 || day === 0) && vacation === true) {
    return "off";
  }
}

console.log(alarmClock(6, true));
