// palindrome

function palindrome(str){
    let reverseStr = ""

    for(let i = str.length -1; i>=0; i--){
        reverseStr = reverseStr + str[i]
    }
    return reverseStr === str;
}

// Test cases
console.log(palindrome("kayak")); // Output: true
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("hello")); // Output: false
console.log(palindrome("level")); // Output: true