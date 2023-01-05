// // Question-1:
// const array = ["Apple", "Banana", "Orange", "Mango"]
// const newArray1 = array.join(",");
// const newArray2 = array.join("+")
// console.log(newArray1);
// console.log(newArray2);

// // Question-2:
// const values = [10,100,3,200,5,6]
// let maxValue = values[0];
// let minValue = values[0]

// for(let i=0; i<values.length; i++){
//     if(values[i]>= maxValue){
//         maxValue = values[i];
//     }
// }
// for(let i=0; i<values.length; i++){
//     if(values[i]<= minValue){
//         minValue = values[i]
//     }
// }
// console.log("Max value:",maxValue);
// console.log("Min value:",minValue);


// // Question-3
// const num = [4, 50, 1, 5, 8];
// for(let i=0; i<num.length-1; i++){
//     for(let j = i+1; j<num.length; j++){
//         if(num[i]>num[j]){
//             let temp = num[i];
//             num[i] = num[j];
//             num[j] = temp;
//         }
//     }
// }
// console.log("Sorted Array:",num);

// // Question-7:
// const peoples = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         weight: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         weight: '136',
//         eye_color: 'black',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         weight: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         weight: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// // method to get array of peoples with weigth greater than 100
// let weigth100 = peoples.filter(function (wt){
//     if(wt.weight > 100){
//         return wt.name;
//     }
// })
// console.log("People with weight greater than 100",weigth100)

// // method to get an array of peoples with height less than 200
// let height200 = peoples.filter(function (ht){
//     if(ht.height<200){
//         return ht.name
//     }
// })
// console.log("Peoples with height less than 200", height200);

// // Method to get all female character
// let femaleChar = peoples.filter(function (femalePeople){
//     return femalePeople.gender === "female";
// })
// console.log("All female People are: ", femaleChar)
// // Method to get all male character
// let maleChar = peoples.filter(function (malePeople){
//     return malePeople.gender === "male";
// })
// console.log("All male People are: ", maleChar)


// // method to get array of objects with just name and height properties 
// let name_height = peoples.map(function (name_ht){
//     return {name: `${name_ht.name}`, height: `${name_ht.height}`}
// })

// console.log("Object with just name and height properties:", name_height);
// // 
// // 
// // 
// // -----Second Day Homework-----
// // question 1
// const array1 = [12,33,5,27,1]
// let newArray1 = []
// for(let i=0; i<array1.length; i++){
//     for(let j=i+1; j<array1.length; j++){
//         if(array1[i] > array1[j]){
//             let temp = array1[i];
//             array1[i] = array1[j];
//             array1[j] = temp;
//         }
//     }
// }
// for(let i=1; i<=2; i++){
//     newArray1.push(array1[i])
// }
// console.log(newArray1)

// // question 2
// const numArray = [1,7,13,19];

// const checkPrime = numArray.reduce((element) => {
//     if (element % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }
// });

// console.log(checkPrime);

// //question 3
// let number = [2, 7, 11, 15]
// let target = 9
// let newNumber = []
// number.forEach((num, index)=>{
//     for(let j=index+1; j<=number.length; j++){
//         if(num + number[j]=== target){
//             console.log([index, j])
//         }
//     }
// });

onst data1 = [
    { food: { name: "pizza", id: 2 }, qty: 1 },
    { food: { name: "momo", id: 3 }, qty: 5 },
    { food: { name: "pizza", id: 2 }, qty: 9 },
  ];
  [{ name: "pizza", qty: 10 }];
  const reducedData1 = (arr) => {
    const filteredArr = arr.filter((obj) => {
      return obj.food.id === 2;
    });
    //two array
    console.log(filteredArr, "filteredArr");
    const qty = filteredArr.reduce((acc, obj) => {
      return acc + obj.qty;
    }, 0);
    console.log(filteredArr[0], "filteredArr");
    console.log(qty, "qty");
    const newData = [filteredArr[0]].map((currentValue) => {
      console.log(currentValue, "currentValue");
      return { name: currentValue.food.name, qty: qty };
      // arr
      // acc.push({ name: obj.food.name, qty: qty });
      // return acc;
    }, []);
    return newData;
  };
  console.log(reducedData1(data1), "test data array");