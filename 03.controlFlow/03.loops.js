//also known as iterators

/**
 * FOR LOOP
 * for (let index = 0; index < array.length; index++) {
 *   const element = array[index];
 * }
 * 
 * WHILE LOOP
 * while(true){
 *  console.log(3)
 * }
 * 
 * break & continue
 * 
 * 
 * 
 * 
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 * 4. for each loop
 */




// Higher order array loops ( array specific loops )

/**
 * 1.for of
 * 
 */
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num)
}

const greetings = "hie";
for (const iterator of greetings) {
    console.log(iterator);
}


