var field = document.querySelector('#inputField');
var todoList = document.querySelector('#todoList');
var newTodo = document.querySelector('#newTodo');

function App() {
    this.allTask = [];
}
    
App.prototype.addTask = function(value) {
    const task = new Task(value);
    console.log(task);
    this.allTask.push(task);
}

var appNew = new App();

function Task(value) {
    this.id = new Date().getTime();
    this.isComplete = false;
    this.value = value;
}

function getTextTask() {
    var todo = field.value;
    field.value = "";
    return todo;
}

function makeTask() {
    const text = getTextTask();
    if (text) {
        appNew.addTask(text);
        render();
    }
}

function render() {
    while (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    appNew.allTask.forEach(function(task) {
        var rowTask = createTask(task);
        fragment.append(rowTask);
    });
    todoList.append(fragment);
}

function createBtn(text) {
    var btn = document.createElement('button');
    btn.append(text);
    btn.classList.add(text);
    return btn;
}

function createTask(task) {
    var listItem = document.createElement('li');    
    var text = document.createTextNode(task.value);
    var span = document.createElement('span');
    span.append(text);
    listItem.append(createBtn('Complete'));
    listItem.append(span);
    listItem.append(createBtn('Delete'));
    listItem.classList.add('container');
    listItem.classList.add(task.isCompleted ? 'is__completed' : 'non__completed');
    return listItem;
}

newTodo.addEventListener('click', makeTask);     

var completeBtn = document.querySelector('.Complete');
var nonComplete = document.querySelector('.non__Complete');

function isComplete() {

}