let a = 7;

if(a === 3){
    console.log("working 1");
}else if(a === 7){
    console.log("working 2");
}else{
    console.log("not working");
}

/*
= assignment
== comparing value
=== compares value as well as it also compares types


< smaller than,
> greater than, 
<= smaller than equal to, 
>= greater than equal to, 
== equal to, 
!= not equal to, 
=== compares value & type, 
!== nor value is true neither type

*/

if(true) console.log("test1") , console.log("test2");


const userLogIn = true, debitCard = true;
if(userLogIn & debitCard){ // (userLogin == true & debitCard == true)
    console.log("Allow");
}else{
    console.log("don't");
}




//SWITCH
const key =2
switch (key) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;

    default:
        console.log("default");
        break;
}