/*
Warmup-1 -- everyNth
Given a non-empty string and an int N, 
return the string made starting with char 0, 
and then every Nth char of the string. 
So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
*/

function everyNth(str, n) {
    let newStr = ""
    for(let i = 0; i < str.length; i++){
    
        if(str[i * n ] === undefined ){
            break;
        } else {
            newStr = newStr + str[i * n]
        }
    }
    return newStr
}


console.log(everyNth('Miracle', 2))