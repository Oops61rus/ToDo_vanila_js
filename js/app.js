const field = document.querySelector('#inputField');
const todoList = document.querySelector('#todoList');
const newTodo = document.querySelector('#newTodo');
const todoListTask = newTodo.addEventListener('click', list);

function list() {
    const text = 'Task: ' + field.value;

    todoList.innerHTML = text;
}



// const del = newTodo.addEventListener('click', delBtn);

// function delBtn() {
//     var deleteTask = document.createElement('button');
//     deleteTask.innerHTML = 'Delete';
//     document.body.appendChild('button');
// }

// todoList.insertAdjacentHTML('beforeEnd', deleteTask);

// var comleteTask = document.createElement('button');
// document.body.insertBefore(comleteTask, todoListTask);




// var list = document.createElement('li');
// document.body.append(todoListTask);

// var todoListBtn = todoListTask.insertAdjacentElement('afterbegin', '<button>Delete</button>');


// let allTask = [];

// for (let i = 0; i < 10; i++) {

// }


