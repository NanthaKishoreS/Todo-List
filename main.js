const todolist = [];

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

for(let i=0;i<todolist.length;i++){
    const todoObj = todolist[i];
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate} </div>  
    <button class="delete-button" onclick="
    todolist.splice(${i},1);
    renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
    
}

document.querySelector('.js-container').innerHTML = todoListHTML;
}

function addTodo(){
const inputElem = document.querySelector('.js-input');
const inputDate = document.querySelector('.js-date');
const name = inputElem.value;
const date = inputDate.value;
todolist.push({name:name,dueDate:date});

inputElem.value = '';

renderTodoList();
}
