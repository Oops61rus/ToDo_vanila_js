function App() {
  this.allTask = storage.getData("tasks");

  this.init = function () {
    var self = this;
    var addTodoBtn = document.querySelector("#addTodoBtn");
    addTodoBtn.addEventListener("click", this.createTaskOnClick.bind(this));
    var inputField = document.querySelector("#inputField");
    inputField.onkeyup = function (e) {
      if (e.key !== "Enter") return;
      self.createTaskOnClick();
    };
    this.field = document.querySelector("#inputField");
    this.todoList = document.querySelector("#todoList");
    filter.init(this.render.bind(this));
    paging.init(this.render.bind(this));
    sort.init(this.allTask, this.render.bind(this));
    storage.setData("sortType", sort.activeSort);
    this.render();
  };
}

App.prototype = {
  addTask: function (value) {
    var task = new Task(value);
    var sortBtn = document.querySelector("#sort");
    sortBtn.classList.contains("up")
      ? this.allTask.unshift(task)
      : this.allTask.push(task);
  },

  render: function () {
    var self = this;
    while (this.todoList.lastChild) {
      this.todoList.removeChild(this.todoList.lastChild);
    }
    var fragment = document.createDocumentFragment();
    var arr = filter.getFilteringArr(this.allTask);
    arr = paging.getPagingTodos(arr, this.render.bind(this));

    if (arr.length == 0 && paging.activePage > 1) {
      paging.activePage = paging.activePage - 1;
      this.render();
    }

    arr.forEach(function (task) {
      var rowTask = taskCreator.createBtnForTask(
        task,
        self.completeTask.bind(self),
        self.deleteTask.bind(self)
      );
      fragment.append(rowTask);
    });
    todoList.append(fragment);
    storage.setData("tasks", this.allTask);
    storage.setData("activeFilter", filter.filterState);
    storage.setData("activePage", paging.activePage);
    storage.setData("taskOnPage", paging.pageSize);
  },

  getTextTask: function () {
    var todo = this.field.value;
    this.field.value = "";
    return todo;
  },

  createTaskOnClick: function () {
    var text = this.getTextTask();
    if (text) {
      this.addTask(text);
      this.render();
    }
  },

  completeTask: function (id) {
    var self = this;
    this.allTask.forEach(function (item, i) {
      if (item.id === id) {
        self.allTask[i].isComplete = !self.allTask[i].isComplete;
      }
    });
    this.render();
  },

  deleteTask: function (id) {
    var self = this;
    this.allTask.forEach(function (item, i) {
      if (item.id === id) {
        self.allTask.splice(i, 1);
      }
    });
    this.render();
  },
};

var newApp = new App();

newApp.init();
