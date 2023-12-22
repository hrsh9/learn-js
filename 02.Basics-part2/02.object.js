/*
two ways to declare object: 
i. constructor ki trh 
ii. literal ki trh

if we use constructor to create object...phr jo bnta h usko singleton kehte h
but if we use literal, then it will have multiple instances
*/

//Object.create constructor way to create object

//OBJECT LITERALS

const mySymbol = Symbol("key");

const jsUser = {
    name: "Harsh",
    "FullName" : "Harsh Kumar" , // this can't be accessed with dot (.) operator 
    age: 24,
    [mySymbol]: "myKey1", //symbol
    location: "Greater Noida",
    email:"harsh@email.com",
    lastLogin: [ "Monday", "Saturday" ]
}

// console.log(jsUser.name);
// console.log(jsUser["FullName"]);
// console.log(typeof jsUser.mySymbol);
// console.log(typeof jsUser[mySymbol]);

jsUser.email = "hrsh@mail.com";
Object.freeze(jsUser.email);

const obj1 = { 1 : 'a', 2 : 'b'};
const obj2 = { 3 : 'a', 4 : 'b'};
const obj3 = { 5 : 'a', 6 : 'b'};

const obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);

//DESTRUCTURING OF OBJECT
const course= {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course;

//console.log(courseInstructor);
console.log(instructor);

//destructuring in react portion
// const navbar = ({company}) => {};
// navbar(company = "hitesh");



//API: Application Programming Interface || JSON
