//{} 'curly braces' is scope in most of the programming languages

if(true){
    let a = 3;
    const b = 8;
    var z = 89;
}

// console.log(a);
// console.log(b);
// console.log(z);



// SCOPE IN NESTING

function one(){
    const username = "harsh";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();

//inner function can access data of outside function is known as closure.
//eg. function two can access data of function one

//HOISTING
console.log(addOne(7));//work
function addOne(num){
    return num+1;
}

// console.log(addTwo(3)); //don't work
let addTwo = function(num){
    return num+2;
}