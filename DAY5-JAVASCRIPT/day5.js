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



let person = [
    {
        name:'JAVA',
        last_name:'first',
    },
    {
        name:'JAVASCRIPT',
        last_name:'second',

    },
    {
        name:'Python',
        last_name:'third',
    },
    {
        name:'JAVASCRIPT',
        last_name:'second',
    },    
    ];
    
    const updatedperson =person.filter(byfirstname);
    function byfirstname(name){
        // console.log(name.name,'testname');
        return name.name==='JAVASCRIPT';
    }
    console.log(updatedperson,'nayamanchai');
