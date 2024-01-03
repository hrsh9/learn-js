//Immediately Invoked Funcion Expression(IIFE)

function one(){
    console.log(`DB CONNECTED`);

}
one();
//one is named iife
(function one(){
    console.log(`DB CONNECTED`);

})();

//IIFE used to avoid global scope polution


( ()=>{//this is unnamed iife
    console.log(`all db connected`);
}) ();