const todoList = ['make dinner', 'make dishes'];
function addTodo(){
    const inputElem = document.querySelector('.js-input');
    const name = inputElem.value;

    todoList.push(name);
    console.log(todoList);

    inputElem.value='';

    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        const todo = todoList[i];
        const html = '<p>${todo}</p>';
        todoListHTML += HTML;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}
