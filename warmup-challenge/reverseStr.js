// reverse a given string 

function reverse(str){
    let reversedStr = ""

    for(let i = str.length -1 ; i >= 0; i--){
        console.log(str[i])
        reversedStr = reversedStr + str[i]
    }
   return reversedStr;
}

console.log(reverse("bilal"))