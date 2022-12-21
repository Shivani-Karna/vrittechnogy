
let itemInput =document.querySelector('#item-input');
let listOfItems = document.getElementById('items');
console.log(itemInput.value,'input');  
let button = document.querySelector('button');
console.log(button,'button');

// create element
const createElement =  () => {
    const listItem =document.createElement('li');
    const label = document.createElement('label');
    label.innerText = itemInput.value;
    console.log(label,'label');
    console.log(listItem?.value, 'value ');
// Append child label
listItem.appendChild(label);
console.log(listItem,'listItem');
console.log(itemInput.value,'value');
return listItem;
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

