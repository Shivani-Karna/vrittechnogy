// let updatebutton = document.querySelector('.update');
let itemInput =document.querySelector('#item-input');
let listOfItems = document.getElementById('items');
console.log(itemInput.value,'input');  
let button = document.querySelector('button');
console.log(button,'button');

// create element
const createElement =  () => {
    const listItem =document.createElement('li');
    const label = document.createElement('label');
    const editbtn = document.createElement('button');
    editbtn.className ='edit';
    editbtn.innerText="Edit";
    const deletebtn = document.createElement('button');
    deletebtn.className='delete';
    deletebtn.innerText='Delete';
    label.innerText = itemInput.value;
    button.innerText='Update';
    console.log(label,'label');
    console.log(listItem?.value, 'value ');


// Append child label


listItem.appendChild(label);
listItem.appendChild(editbtn);
listItem.appendChild(deletebtn);
console.log(listItem,'listItem');
console.log(itemInput.value,'value');
return listItem;
};

// function to be called  
const addItem =() => {

    console.log('I am clicked');
    let items=createElement();
    itemInput.value !== ""
    ? listOfItems.appendChild(items)
    : alert("please add item");
    // listOfItems.appendChild(items); 
    itemInput.value= '';
    console.log("items",items);
    handleEvents(items);
    button.innerText='Add';
   
};
// 
function handleDelete() {
console.log(this,'i am running');
let items = this.parentNode;
let ul = items.parentNode;//variable matra rakheko ho.
// console.log(ul,'jedha nasha');
ul.removeChild(items);
console.log(items,'listItem in delete');

};

function handleEdit(){
    console.log(this,'I am the problem its me');
    let items=this.parentNode;
    // console.log(items,'I am getting over edit feature');
    let label = items.querySelector('label');
    itemInput.value=label.textContent;
    console.log(label,'kdjfie');
    button.innerText='Update';



};

const handleEvents = (items) =>{
    let editorbtn= items.querySelector('.edit');
    // console.log(editorbtn,'hello');
    let deletebtn= items.querySelector('.delete');
    deletebtn.onclick=handleDelete;
    editorbtn.onclick=handleEdit;

    console.log(items,'listItem in function');
};
// function to be called




// first add event Listener
button.addEventListener("click",addItem);

