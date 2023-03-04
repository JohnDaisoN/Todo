const todoInput=document.querySelector(".todo_input");
const todoButton=document.querySelector(".todo_button");
const todoList=document.querySelector(".todo-itemlist");
const filterop=document.querySelector(".todo-filter");
todoButton.addEventListener('click',addtodo);
todoList.addEventListener('click',trashcheck);

function addtodo(event){
   // console.log("hello everyone");
    event.preventDefault();
    const toDoDiv=document.createElement('div');
    toDoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("tod-item");
    toDoDiv.appendChild(newTodo);
    
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete_btn");
    toDoDiv.appendChild(completedButton);
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash_btn");
    toDoDiv.appendChild(trashButton);
    todoList.appendChild(toDoDiv);
    todoInput.value="";
}
function trashcheck(e){
   // console.log(e.target);
  const item=e.target;
  if (item.classList[0]=== "trash_btn"){
    const todo=item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend',function(){
      todo.remove();
    })
    
    
  }
  if (item.classList[0]=== "complete_btn"){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
  }
  }
