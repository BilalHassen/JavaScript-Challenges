// reverse an integer

function reverseInt(n){
    let str = Math.abs(n).toString(); // Convert to string and get absolute value

    let reverseInt = ""
    for(let i = str.length -1; i >= 0; i--){
        reverseInt = reverseInt + str[i];
    }

    if(n < 0){
        reverseInt = -reverseInt;
    }

    return parseInt(reverseInt);
}

console.log(reverseInt(-21))