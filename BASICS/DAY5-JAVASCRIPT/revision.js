// const myArray = [1,2,3,4,5];
// console.log(typeof(myArray));
// console.log(Array.isArray(myArray));
// const myVar=5;
// console.log(typeof myVar);
// console.log(Array.isArray(myVar));

// let box=new Array(3)[0];
// console.log(box)

// const myArray = ['a','b','c','d'];
// myArray.splice(2,0,'new');
// console.log(myArray);
const myArray = [1,2,3,4,5];
myArray2 =[6,7,8];
newArray = myArray.concat(myArray2);
console.log(myArray);
console.log(myArray2);
console.log(newArray);

const myArray3 = [...myArray];
console.log(myArray3);
