// datatype is js : maps
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

// values of map will always be unique


//FOR-OF
for (const [key, value] of map1) {
    console.log(key, " : ", value);
}



const sh = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}
//FOR-IN
for (const key in sh) {
    console.log(`${key} is used for ${sh[key]}`);
}

//for-each
const coading = ['js', 'ruby', 'java', 'python', 'cpp'];
coading.forEach(element => {
    console.log(element);
});

const coading1 = ['js', 'ruby', 'java', 'python', 'cpp'];
coading1.forEach((element, index, array) => {
    console.log(element, index, array);
});