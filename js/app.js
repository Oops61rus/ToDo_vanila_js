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

var newApp = new App();

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
        newApp.addTask(text);
        render();
        console.log(newApp.allTask)
    }
}

var filterState = 0;

function render() {
    while (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    var arr = filter();

    arr.forEach(function(task) {
        var rowTask = createTask(task);
        fragment.append(rowTask);
    });
    todoList.append(fragment);
}

function filter() {
    var arr = newApp.allTask;
    if (filterState !==0) {
        arr = newApp.allTask.filter( function(task) {
            return filterState === 1 ? !task.isComplete : task.isComplete;
        })
    };
    return arr;
}

function createBtn(text, func, id) {
    var btn = document.createElement('button');
    btn.append(text);
    btn.classList.add(text);
    btn.addEventListener('click', function() {
        func(id);
    });
    return btn;
}

function createTask(task) {
    var listItem = document.createElement('li');    
    var text = document.createTextNode(task.value);
    var span = document.createElement('span');
    span.append(text);
    listItem.append(createBtn("Complete", completeTask, task.id));
    listItem.append(span);
    listItem.append(createBtn("Delete", deleteTask, task.id));
    listItem.classList.add('container');
    span.classList.add(task.isComplete ? 'is__complete' : 'non__completed');
    return listItem;
}

newTodo.addEventListener('click', makeTask);     

function completeTask(id) {
    newApp.allTask.forEach( function(item, i) {
        if(item.id === id){
            newApp.allTask[i].isComplete = !newApp.allTask[i].isComplete;
        }
    });
    render();
}

function deleteTask(id) {
    newApp.allTask.forEach( function(item, i) {
        if(item.id === id){
            newApp.allTask.splice(i, 1);
        }
    });
    render();
}

function filter0() {
    filterState = 0;
    render();
}

function filter1() {
    filterState = 1;
    render();
}

function filter2() {
    filterState = 2;
    render();
}


var btnAll = document.querySelector('#all');
var btnActive = document.querySelector('#active');
var btnCompleted = document.querySelector('#completed');


btnAll.addEventListener('click', filter0); 
btnActive.addEventListener('click', filter1); 
btnCompleted.addEventListener('click', filter2); 


