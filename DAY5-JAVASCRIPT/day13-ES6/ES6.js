// let button = document.querySelector('button');
// console.log(button,'button');
// console.log(this,'this is me');
// button.addEventListener('click',  (event) => {
//     console.log(this,'Hello event');
// });

// default Parameters
// function add(num1,num2=10){
//     return num1+num2;
// }
// add(5,2)//return 7
// add(3);//returns 13 as num2 has default value=10

// ----template strings---
// let myName='john';
// let myRole='Software Developer';
// console.log(`My name is ${myName} and I am a ${myRole}.`);

// ---destructuring----
// let array=['Shreya','Software Developer'];
// const [myName,myRole]=array;
// console.log(myName,'myName');
// console.log(myRole,'myRole');


// -----Object Destructuring---
// let object={name:'Shivani'};
// const {name}=object;
// console.log(name, 'test name');


// -----spread  and rest operator---
// allows us to quickly copy all or part of an existing array or object into another
// function sum (...args){//rest ho
//     console.log(args,'args');
//     let total = 0;
//     for (const arg of args)
//     {
//         total+=arg;
//     }
//     return total;
// }
// console.log(sum(1,2,3));

// const myVehicle ={
//     brand:'Range Rover',
//     model:'SUV',
//     color:'black',
// };
// let updateVariable = {...myVehicle};
// // console.log(copyVariable);
// const updateVehicle ={
//     type:'car',
//     year:2021,
//     color:'yellow',
// };
// let copyVariable ={...myVehicle,...updateVehicle};
// console.log(copyVariable);

// let vehicle = updateVehicle;
// console.log(vehicle,'vehicles');
// vehicle.testKey='hello';
// console.log(vehicle,'vehicles');
// console.log(updateVehicle,'Updatedone');


// ---DEEP COPY &&& SHALLOW COPY----




