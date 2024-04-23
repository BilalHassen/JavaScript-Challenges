
function maxChar(str){
    // object to store each char of the string
    // and its value
    let letterValue = {}
    let count = 0;
    let highestLetter = ""
    for(let i = 0; i <str.length; i++){
        if(letterValue[str[i]]){
            letterValue[str[i]] += 1
        } else {
            // set the key as the current letter in the loop with a value 
            // of 1 
           letterValue[str[i]] = 1
        }
    }
 

    // loop over the object 
    for(let key in letterValue){
        if(letterValue[key] > count){
            count = letterValue[key]
            highestLetter = key
        }
    }

    return `the letter ${highestLetter} is the most used and its used ${count} times`
}




console.log(maxChar("hello")); // Output: the letter l is the most used and its used 2 times
console.log(maxChar("programming")); // Output: the letter g is the most used and its used 2 times
console.log(maxChar("banana")); // Output: the letter a is the most used and its used 3 times




