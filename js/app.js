// var allTask = [];

// var field = document.querySelector('#inputField');
// var todoList = document.querySelector('#todoList');
// var newTodo = document.querySelector('#newTodo');
// // var todoList = document.querySelector('#pagingContainer');

// function Task(value) {
//     this.id = new Date().getTime();
//     this.isComplete = false;
//     this.value = value;
// }

// function getValueFromInput() {
//     var valueFromInput = field.value;
//     field.value = "";
//     return new Task(valueFromInput);
// }

// function createTextTask(task) {
//     var newTask = document.createElement('li');
//     newTask.innerHTML = task.value;
//     return newTask;
// }

// function createButton(text) {
//     var newButton = document.createElement('button');
//     newButton.innerHTML = text;
//     return newButton;
// }

// function createTask(task) {
//     var container = document.createElement('div');
//     container.classList.add('container')
//     container.append(createButton('delete'));
//     container.append(createTextTask(task));
//     container.append(createButton('complete'));
//     return container;
// }

// function render() {
//     // while (todoList.lastChild) {
//     //     todoList.removeChild(todoList.lastChild);
//     // }
//     var task = getValueFromInput();
//     allTask.push(task);
//     allTask.forEach(function(item) {
//         var todo = createTask(item);
//         todoList.append(todo);
//     });
// }

// newTodo.addEventListener('click', render);



var field = document.querySelector('#inputField');
var todoList = document.querySelector('#todoList');
var newTodo = document.querySelector('#newTodo');

function task() {
    var todo = field.value;
    todoList.innerHTML = todo;
    return todo;
}

function createBtn(text) {
    var btn = document.createElement('button');
    btn.innerHTML = text;
    return btn;
}

function createTask() {
    var list = document.createElement('li');
    var div = document.createElement('div');
    list.classList.add('container');
    list.append(div);
    div.append(task());
    div.append(createBtn('Delete'));
    div.append(createBtn('Complete'));
    return list;
}

newTodo.addEventListener('click', createTask);