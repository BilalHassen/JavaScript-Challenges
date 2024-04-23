/*
Write a function called arrayChunk 
that takes two parameters: an array array and a number size. 
The function should divide the array into smaller chunks of the given size 
and return these chunks as a two-dimensional array.
*/


function arrayChunk(array, size){
    let chunckedArray = [];

    let index = 0

    while(index < array.length){
        chunckedArray.push(array.slice(index, index + size))
        index += size;
    }

    return (chunckedArray)
}


