/*
String-1 -- extraEnd
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
*/

function extraEnd(str){
    let finalStr = ""

    let lastTwo = str.substring(str.length - 2, str.length)
    for(let i = 0; i < 3; i++){
        console.log(lastTwo)
        finalStr = finalStr + lastTwo
    }
    return finalStr
}

console.log(extraEnd('Hello'))