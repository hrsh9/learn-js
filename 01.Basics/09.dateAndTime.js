let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let createDate = new Date("01-14-2023");
console.log(createDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
})