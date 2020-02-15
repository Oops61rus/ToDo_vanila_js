function App() {
  this.allTask = storage.getData('tasks');

  this.init = function() {
    var addTodoBtn = document.querySelector('#addTodoBtn');
    addTodoBtn.addEventListener('click', this.createTaskOnClick.bind(this));
    this.field = document.querySelector('#inputField');
    this.todoList = document.querySelector('#todoList');
    filter.init(this.render.bind(this));
    paging.init(this.render.bind(this))
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
    var self = this;
    while (todoList.lastChild) {
      todoList.removeChild(todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    var arr = filter.getFilteringArr(this.allTask);
    arr = paging.getPagingTodos(arr, this.render.bind(this));
    
    arr.forEach(function(task) {
      var rowTask = taskCreator.createBtnForTask(task, self.completeTask.bind(self), self.deleteTask.bind(self));
      fragment.append(rowTask);
    });
    todoList.append(fragment);
    storage.setData('tasks', this.allTask);
    storage.setData('activeFilter', filter.filterState);
    storage.setData('activePage', paging.activePage);
    storage.setData('taskOnPage', paging.pageSize);
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
