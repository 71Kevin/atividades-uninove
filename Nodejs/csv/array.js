const util = require('util');

let array = [0,1,2];
let object = { a: 1 };
let collection = [{ a: 1}, { a: 1}];

console.log('array', util.inspect(array, false, null, true))
console.log('object', util.inspect(object, false, null, true))
console.log('collection', util.inspect(collection, false, null, true))

array.map((el) => {
    console.log(el)
})

let sum = array.reduce((a, v) => {
   return a + v;
})

console.log(sum)