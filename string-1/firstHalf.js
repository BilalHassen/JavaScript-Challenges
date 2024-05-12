/*
String-1 -- firstHalf
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
*/ 



function firstHalf(str){
    if(str.length % 2 === 0){
       return str.substring(0, str.length / 2)
    }

    return str;
}

console.log(firstHalf("WooHoo"))