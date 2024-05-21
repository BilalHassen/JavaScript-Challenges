/*String-1 -- endsLy
Given a string, return true if it ends in "ly".*/

function endsLy(str) {
  return str.substring(str.length - 2, str.length) === "ly";
}

console.log(endsLy("oddly"));
