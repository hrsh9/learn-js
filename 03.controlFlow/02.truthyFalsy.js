/*

-- truthy vs falsy
* everything written in js is either truthy and falsy

  falsy values : 0, false, undefined, null, NaN, document.all, "", 0n : in BigInt

  all the values other than these are truthy values
    : true, 1, "0", 'false', ' ',[ ], {}, function(){},

     false == 0 : true
     false == "" : true
     0 == '' : true
*/

// NULLISH COALESCING OPERATOR (??) : null undefined

let val1, val2, val3;
val1 = 5 ?? 10; // 5
val2 = null ?? 7; // 7
val3 = undefined ?? 3 // 3
console.log(val1);
console.log(val2);
console.log(val3);