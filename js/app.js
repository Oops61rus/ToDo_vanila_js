var field = document.querySelector('#inputField');
var todoList = document.querySelector('#todoList');
var newTodo = document.querySelector('#newTodo');


function App() {
    this.allTask = [];
}
    
App.prototype = {
    addTask: function(value) {
        var task = new Task(value);
        console.log(task);
        this.allTask.push(task);
    },

    render: function() {
        while (todoList.lastChild) {
            todoList.removeChild(todoList.lastChild);
        }
        var fragment = document.createDocumentFragment();
        var arr = filter();
    
        arr.forEach(function(task) {
            var rowTask = taskCreator.createBtnForTask(task);
            fragment.append(rowTask);
        });
        todoList.append(fragment);
    },

    getTextTask: function() {
        var todo = field.value;
        field.value = "";
        return todo;
    },

    createTaskOnClick: function() {
        var text = newApp.getTextTask();
        if (text) {
            newApp.addTask(text);
            newApp.render();
        }
    },

    completeTask: function(id) {
        newApp.allTask.forEach( function(item, i) {
            if(item.id === id){
                newApp.allTask[i].isComplete = !newApp.allTask[i].isComplete;
            }
        });
        newApp.render();
    },

    deleteTask: function(id) {
        newApp.allTask.forEach( function(item, i) {
            if(item.id === id){
                newApp.allTask.splice(i, 1);
            }
        });
        newApp.render();
    }
}

var newApp = new App();

newTodo.addEventListener('click', newApp.createTaskOnClick);