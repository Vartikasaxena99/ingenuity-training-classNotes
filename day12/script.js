// console.log('my name is');
// localStorage.setItem('name','vartika');//add a key value pair inside the local storage

// localStorage.clear();//clear the entire local storage
// localStorage.removeItem('name');//remove a particular key value pair
// let Name= localStorage.getItem('name');//retrive an item from local storage
// let Name1= localStorage.getItem('namejjkkkklllllllllllllllllll');
// console.log(Name);
// console.log(Name1);





// Selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todolist = document.querySelector(".todo-list");
var i=1;

//Event Handlers
btn.onclick = create;
todolist.onclick = deletecheck;

  

//Functions
function create(e) {
  // if (todoInput.value != "") {
    e.preventDefault();
    if(todoInput.value=="")
  {
    alert("Input value can t blank");
  }
else
{
    window.localStorage.setItem("mylist"+i,todoInput.value);
  i++;

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    
    todolist.appendChild(newDiv);
    todoInput.value = "";
  } 


function deletecheck(e) {
  var item = e.target;

  if (item.classList[0] === "delete-btn") {
    var parent = item.parentElement;
    parent.remove();
  }

  if (item.classList[0] === "cmplt-btn") {
    var parent = item.parentElement;
    parent.classList.toggle("completed");
  }
}
}

window.onbeforeunload = function() {
  localStorage.setItem(i, $('.todo-input').val());
  
}
