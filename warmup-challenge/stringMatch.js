/*
Warmup-2 -- stringMatch
Given 2 strings, a and b, 
return the number of the positions 
where they contain the same length 2 substring. 
So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az"
substrings appear in the same place in both strings.
*/

function stringMatch(a, b){
    let count = 0;
    for(let i = 0; i < a.length -1 && b.length -1; i++){
        console.log(a[i], b[i])
        if(a[i] === b[i] && a[i + 1] === b[i + 1]){
            count += 1
            console.log(count)
        }
    }
    return count;
    
}

console.log(stringMatch('xxcaazz', 'xxbaaz'))