// single line comment
// declaring variable
// var a=1;
//global scope huncha
//reassign and redeclare both garna milyo

// let b=2;
//reassign garna mildaina
//redeclare garna mildaina
// const c=5;
//change garna mildaina euta matra rakhna milcha
//(reassign garna mildaina)
//redeclare garna mildaina
// alert(a+b);
// let a =10;
// let name
// let test;
// prompt(test);
// console.log("HI its me iam the problem its me");
// let a =10;
// let b= 20;
// let c= a**b;

//power ho.
// let (a == b);
// alert(a==b);
//double equals is used to check the value only
// alert (a===b);
//triple equals is used to check the value and datatype
// let t= false && true;
// alert(t);
// let isLoggedIn= true;
// let isSuperUser= true;
//Logical AND
// let test = false || true;
// Not 
// let test1 = !true;
// alert(test1);
//ARRAY
// let array=[1,2,3,4,5,6,7];
    // alert(array[2]);
//OBJECTS
// let object1 = { name:'shivani', age:24};
//             //    key : value   
//    console.log(object1["age"],"object1"); 
//    console.log(object1.name,"object1");     
//EXAMPLE OF OBJECTS
// let fruits={first:'Mango',
// second:'Apple',
// third:'grapes'};
// console.log(fruits);     
// let person ={
//     person1:'shivani',
//     person2 :'pooja',
//     age:24
// };
// if (person.person1 ==='shivani' && person.age >20)
// {
//     alert('shivani');
// }
// else if(person.age <20) {
//     alert('Failed to execute');
// }
// let objectvitrakoobject ={
//     name:'shivani',
//     roll:10,
//     course :{
//         first:'python',
//         second:'java',
//         third:'javascript'

//     },
// };
// alert(objectvitrakoobject.course.first);
//FUNCTION
// function add(parameter1, parameter2){
//     add(argument1, argument2);

// }
//FUNCTION
// function add(a,b){
//     return alert(a+b);
// }
// add(10,20);
// add(30,40);
// function multiplication(a,b){
//     return alert(a*b);
// }
// multiplication(2,3);
// multiplication(5,6);

// function comparison(){
//     let a=7;
//     let b=8;
//     if(!(a>b)){
//     alert('oooo');
//     }
// }
// comparison();
// LOOPING
// for (i=0; i<=10;i++){
//     console.log(i,`hello${i}`);
// }
// let array =[1,2,3,4,5];
// for (i=0;i<array.length;i++){
//     console.log(array[i],'print i');
// }
// SWITCH CASE
// let calculation = prompt("Enter your operation among +,-,* and /");
// const a= parseInt(prompt("Enter first"));
// const b=parseInt(prompt("Enter second"));
// let result;

// switch(calculation)
// {
//     case "+":
//         result=a+b;
//         //template string
//         console.log(`${a}+${b}= ${result}`);
//         break;
//     case "-":
//         console.log(`${a}-${b}= ${result}`)
//             break;   
//     case "*":
//         console.log(`${a}*${b}= ${result}`)
//             break;
//     default:
//         console.log(`${a}/${b}= ${result}`);                 
// }
//ADD AT THE END------

// console.log(calculation);
// let languages =['java','python','js'];
// languages.push('Golang');
// console.log(languages);

// ---ADD AT THE STARTING-----
// let languages =['java','python','js'];
// console.log(languages);
// languages.unshift('Golang');
// console.log(languages);

// ---REMOVE FROM LAST---
// let languages =['java','python','js'];
// console.log(languages);
// languages.pop('Golang');
// console.log(languages);

//  ---INDEX WISE VALUE CHANGE GARNA NI MILCHA--
// let dailyroutine =['eat','sleep'];
// dailyroutine[2]='dance';
// console.log(dailyroutine);

// // ----SORTING METHOD-----
// console.log(dailyroutine.sort(),'sorted array');
// console.log(dailyroutine.reverse(),'reversed array');

// // --CONCAT METHOD--
// console.log(dailyroutine.concat(dailyroutine));

// ---JAVASCRIPT MAP FUNCTION--Modify garna lai matra use huncha
// const numbers =[10,20,30,40];
// const newArr =numbers.map(multiply);
// function multiply(num){
//     return num*10;
// }
// console.log(newArr,'newArr');


//---ARRAYY OF NUMBERS----
// const numbers =[10,20,30,40];
// const updated =numbers.map(subtraction);
// function subtraction(data){
//     return data-5;
// }
// console.log(updated,'naya array');


//---ARRAY OF OBJECTS----
// let person = [
// {
//     name:'JAVA',
//     last_name:'first',
// },
// {
//     name:'JAVASCRIPT',
//     last_name:'second',
// },
// ];

// const updatedperson =person.map(fullname);
// function fullname(name){
//     console.log(name.name,'testname');
//     return {Fullname:`${name.name} ${name.last_name}`};
// }
// console.log(updatedperson,'nayamanchai');



// let person = [
//     {
//         name:'JAVA',
//         last_name:'first',
//     },
//     {
//         name:'JAVASCRIPT',
//         last_name:'second',

//     },
//     {
//         name:'Python',
//         last_name:'third',
//     },
//     {
//         name:'JAVASCRIPT',
//         last_name:'second',
//     },    
//     ];
    
//     const updatedperson =person.filter(byfirstname);
//     function byfirstname(name){
//         // console.log(name.name,'testname');
//         return name.name==='JAVASCRIPT';
//     }
//     console.log(updatedperson,'nayamanchai');

// HOMEWORK

// Syntax of reduce method
// array.reduce(function(total, currentValue, currentIndex,arr))

// const numbers =[4,5,6,7,8];
// let testedArray =numbers.reduce(getSum,2);
// function getSum(total,num){
// console.log(total, "total")
// return total+Math.round(num);
// }
// console.log(testedArray,"testedArray");
// const arrayofFoods=[
//     {name:"Pizza",cost:120},
//     {name:"Pasta",cost:500},
// ];
// let totalsum = arrayofFoods.reduce(getSum,0);
// function getSum(final,num){
//     console.log(final,"final_cost");
//     return final+Math.round(num.cost);
// }
// console.log(totalsum);

// global scope
// Hoisting(vaneko declare hunu vanda pahilai ni use garna diyo vanai tyai feature ho)

// var test;
// function hello(){
//     //local variable
//     //var function scope
// }
// if (true){
//     var helloWorld ;
// }
// console.log(helloWorld,'helloworld');
// let example=[5,6,7,8];
// function myFunction(item, index){
//     // console.log(example[index]);
// }
// console.log(example);

// const arrayofFoods =[

// {
//     name:"pizza"


// }
// ];

//Function without name is anonymous function
// let arrFunc = function (foods){
//     return foods.name === 'Pizza';
// };

// let updatedArray = arrayofFoods.find(function(foods){
//     return foods.name ==='Pizza';
// });
// ;
// -----Arrow Expression---

// let updatedArray = arrayofFoods.find((foods)=>{
//     return foods.name === 'Pizza'
// });
// console.log(object);
// ----While Loop---

// const newArray = [1,3,5,6];
// let againArray=[];
// let i=0;
// while (i<5){
    
//     // console.log(i,'i');
//     againArray.push(newArray[i]);
//     i++;
// }
// console.log(againArray);

// ---Do while Loop---
// let array=['ram','shyam','hari'];
// // let newarray=[];
// let i=0;
// do{
//     console.log(array[i],'i');
//     i++;

// }while(i>5);
//     // console.log(newarray);
// ---Immediately Invoked Function--
// (function(){
//     console.log("Welcome");
// })();

// let arr =[10,20,30]
// console.log(arr);

// const data =[
//     {food:{name:"pizza",id:2}, qty:1},
//     {food:{name:"momo",id:3},qty:5},
//     {food:{name:"pizza",id:2},qty:9}
// ];
// let i=0;

// const reducedData1 = (arr) => {
//     const  filteredArr = arr.filter((obj) => {
//         return obj.food.id ==2;
//     });
// }
// for (i=0; i< data.length; i++){
//     console.log(data[i]);
// 
// console.log(document.getElementById(("demo"),'id'));
// console.log(getElementByClassName('demo'),'class');
// console.log(getElementByName('shivani'),'name');

// try catch syntax
//  try{
    // block of code to try
// }
// catch(err){
    // Block of code to handle errors
// }
// let x=1;
// try{
//     if (x==0){
//         console.log('i am test');
//     }else{
//         throw 'error in test';
//     }
// console.log('hello i am try');    

// }catch (error){
//     console.log(error,'');
// }

// ----JAVASCRIPT PROMISE-----------
// let promise =new Promise(function(resolve,reject)
// {
//     // code execution (May take some time)
//     // resolve();
//     // reject();

// });

// let x=1;
// let promise = new Promise ((resolve, reject) => {
//     if (x===0){
//         resolve('hello i am resolve');
//     }else{
//         reject("Error");
//     }

// });
// console.log(promise,"promise");

// 'Consuming Code' (Must wait for a fulfilled Promise)
// promise.then(
    //function (value){
        /* code is successful*/
    // },
    // function(error){

//    

// let x=1;
// let promise = new Promise((resolve,reject) => {
//     if (x===0){
//         resolve('hello I am Resolved');
//     }else {
//         reject("Error");
//     }
    
// });
// console.log(promise,'promise');
// promise.then(
//     (value) => {
//         console.log(value, 'value');
//     },
//     (error) => {
//         console.log(error,'error')
//     }
// );



// let header = document.getElementsByClassName('demo');
// console.log(header);
// header[0].innerHTML = '<p>I am changing something</p>';
// header[0].style.color ='blue';
// console.log(header,'header');

// Create Element
// let button = document.createElement('button');
// button.innerText = 'Button rakhiyo';
// console.log(button,'button');

// ----
// let header =document.createElement("h1");
// console.log(headerh1,"h1");

// // appendChild

// document.body.appendChild(header);
// console.log(button,'button');

// let header =document.createElement("h1");
// header.innerHTML = 'header new banaiyo';
// document.body.appendChild(header);



// let selection = document.getElementById("myFood");

// console.log(selection.firstElementChild,'Food ko selection');
// console.log(selection.parentNode,"parent node");

// -----HOMEWORK--------

// Question no 1:

// let i=0;
// const Fruits =[
//     {name:'Apple', cost:'200'},
//     {name:'Guava', cost:'100'},
//     {name:'Mango', cost:'200'},
// ];
// // for(i=0;i<Fruits.length;i++) {
// //     needed=Fruits[i];
// //     console.log(needed.name.replace);
// // }
// Fruits.forEach((item) => {
//     item[0].name='Grapes';
//     item[1].name='Watermelon';
//     item[2].name='Banana'}
//     );
// console.log(Fruits);
// Syntax;
// event listener
// let button = document.querySelector('button');
// console.log(button,"button");
// let pTag = document.querySelector('p');

// button.addEventListener('click',() => {
//     pTag.innerHTML = "Hello,I am clicked";
//     console.log("I am clicked");
// });

// function testClick (){
//     console.log("I am clicked from test");
// }

// let inputField = document.querySelector('input');
// console.log(inputField, "inputField");
// inputField.addEventListener('keypress',keypress);
// function keypress(event){
//     if (event.key ==='h')
//     // console.log(event,'event');
//     console.log('key pressed');

// }
// let inputSelector =document.querySelector("#items");
// console.log(inputSelector,'inputSelector');
// let button =document.querySelector('button');
// console.log(button,'button');
// // create Element
// const createElement = () => {
//     const listItem =document.createElement('li');
//     console.log(listItem,'listItem');
// };

// const addItem = () => {
//     console.log('I am clicked');
//     createElement();

// };
// button.addEventListener('click',addItem);
let itemInput = document.querySelector("#items");
let listOfItems = document.getElementById("items");
console.log(itemInput,'input');
let button =document.querySelector('button');
console.log(button);


let inputField = document.getElementById("input-item");
console.log(inputField);
let btn2 = document.getElementById("btn1");
console.log(btn2);

// CREATE ELEMENT
const createElement = () => {
    const listItem = document.createElement('li');
    // console.log(listItem);
    const label = document.createElement('label');
    label.innerText = itemInput.value;
    listItem.appendChild(label);
    console.log(listItem, 'listItem');
    
};


// function to be called
const addItem =() => {
    console.log('I am clicked');
    let items=createElement();
    listOfItems.appendChild(items);
    console.log("items",items);
};

// first add event Listener
button.addEventListener("click",addItem);
// let listSelector = document.querySelector('#list');

// console.log(object);

// };
//  const addItem =() => {
//     console.log("I am clicked");
//     createElement();
//  };
//  button.addEventListener("click",addItem);
