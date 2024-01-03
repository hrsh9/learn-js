// this keyword is not used in arrow function

/*
const user = {
    userName : "harsh",
    price : 999,

    wlcmMSG : function (){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

user.wlcmMSG();

user.userName = "Anish";
user.wlcmMSG();
*/

// console.log(this);

// const ok = ()=>{
//     console.log(this.userName)
// }
// ok();

// ARROW FUNCTION
const add1 = (n1, n2) =>{
    return n1+n2;
}
const add2 = (n1, n2) => n1+n2;//without curlly braces, anything after arrow is considered to be returned.
