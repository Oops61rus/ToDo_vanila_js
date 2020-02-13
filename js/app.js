function App() {
  this.allTask = storage.getData('tasks');

  
  this.init = function() {
    var addTodoBtn = document.querySelector("#addTodoBtn");
    addTodoBtn.addEventListener("click", this.createTaskOnClick.bind(this));
    this.field = document.querySelector("#inputField");
    this.todoList = document.querySelector("#todoList");
    filter.initListeners(this.render.bind(this));
    this.render();
  };
}

App.prototype = {
  addTask: function(value) {
    var task = new Task(value);
    console.log(task);
    this.allTask.unshift(task);
  },

  render: function() {
    while (todoList.lastChild) {
      todoList.removeChild(todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    var arr = filter.getFilteringArr(this.allTask);
    
    paging.renderPagination(arr.length);

    arr = paging.getPagingTodos(arr);
    
    arr.forEach(function(task) {
      var rowTask = taskCreator.createBtnForTask(task);
      fragment.append(rowTask);
    });
    todoList.append(fragment);
    storage.setData('tasks', this.allTask);
  },

  getTextTask: function() {
    var todo = this.field.value;
    this.field.value = "";
    return todo;
  },

  createTaskOnClick: function() {
    var text = this.getTextTask();
    if (text) {
      this.addTask(text);
      this.render();
    }
  },

  completeTask: function(id) {
    var self = this;
    this.allTask.forEach(function(item, i) {
      if (item.id === id) {
        self.allTask[i].isComplete = !self.allTask[i].isComplete;
      }
    });
    this.render();
  },

  deleteTask: function(id) {
    var self = this;
    this.allTask.forEach(function(item, i) {
      if (item.id === id) {
        self.allTask.splice(i, 1);
      }
    });
    this.render();
  }
};

var newApp = new App();

newApp.init();
