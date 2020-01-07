var field = document.querySelector('#inputField');
var todoList = document.querySelector('#todoList');
var newTodo = document.querySelector('#newTodo');


function App() {
    this.allTask = [];
}
    
App.prototype.addTask = function(value) {
    var task = new Task(value);
    console.log(task);
    this.allTask.push(task);
}

var arr = new App();

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
    var text = getTextTask();
    if (text) {
        arr.addTask(text);
        render();
        console.log(arr.allTask)
    }
}

function render() {
    while (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    arr.allTask.forEach(function(task) {
        var rowTask = createTask(task);
        fragment.append(rowTask);
    });
    todoList.append(fragment);
}

function createBtn(text, func) {
    var btn = document.createElement('button');
    btn.append(text);
    btn.classList.add(text);
    btn.addEventListener('click', func);
    return btn;
}

function createTask(task) {
    var listItem = document.createElement('li');    
    var text = document.createTextNode(task.value);
    var span = document.createElement('span');
    span.append(text);
    listItem.append(createBtn("Complete", completeTask));
    listItem.append(span);
    listItem.append(createBtn("Delete", deleteTask));
    listItem.classList.add('container');
    span.classList.add(task.isComplete ? 'is__complete' : 'non__completed');
    return listItem;
}

newTodo.addEventListener('click', makeTask);     

function completeTask() {
    console.log('complete');
    arr.allTask[0].isComplete = !arr.allTask[0].isComplete;
    render();
}

function deleteTask() {
    console.log('delete');
    arr.allTask.splice(0, 1);
    render();
}