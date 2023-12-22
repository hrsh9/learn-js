/*
    arrays uses square bracket []
    elements can be different : let arr = [ 0,1,2,3,4,true, "harsh", 'k' ]
    JS arrays are resizable and can contain a mix of different data types.
    arrays are not associative : array elements cannot be accessed using arbitrary strings as indexes, arr[0]OK || arr["one"]NOT-OK
    JS arrays are zero indexed.
    array make SHALLOW copies : copy whose properties share the same references.
    DEEP copies : copy whose properties do not share the same references
*/

let arr = [ 0, 1, 2, 3, 4 ];

let arr2 = new Array( 0, 1, 2, 3, 4 );

console.log(arr);

/*
    ARRAY METHODS:

    Methods that have special treatment for empty slots include the following: 
    concat(), 
    copyWithin(), 
    every(), 
    filter(), 
    flat(), 
    flatMap(), 
    forEach(), 
    indexOf(), 
    lastIndexOf(), 
    map(), 
    reduce(), 
    reduceRight(), 
    reverse(), 
    slice(), 
    some(), 
    sort(), 
    splice(). 
    
    Iteration methods such as forEach don't visit empty slots at all. 
    Other methods, such as concat, copyWithin, etc., preserve empty slots when doing the copying, 
    so in the end the array is still sparse.


    Newer methods (e.g. keys) do not treat empty slots specially and treat them as if they contain undefined. 
    Methods that conflate empty slots with undefined elements include the following: 
    entries(), 
    fill(), 
    find(), 
    findIndex(), 
    findLast(), 
    findLastIndex(), 
    includes(), 
    join(), 
    keys(), 
    toLocaleString(), 
    toReversed(), 
    toSorted(), 
    toSpliced(), 
    values(), 
    with().
*/


 