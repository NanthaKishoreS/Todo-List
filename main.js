const todoList = ['make dinner', 'make dishes'];

function addTodo() {
  const inputElem = document.querySelector('.js-input');
  const name = inputElem.value;
  todoList.push(name);
  inputElem.value = '';

  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html; // fixed lowercase
  }

  document.querySelector('.js-todoList').innerHTML = todoListHTML;
}