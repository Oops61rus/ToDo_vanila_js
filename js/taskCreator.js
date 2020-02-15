function TaskCreator() {}

TaskCreator.prototype = {
  createBtn: function(text, func, id) {
    var btn = document.createElement("button");
    btn.append(text);
    btn.classList.add(text);
    btn.addEventListener("click", function() {
      func(id);
    });
    return btn;
  },

  createBtnForTask: function(task, completeTaskFunc, deleteTaskFunc) {
    var listItem = document.createElement('li');
    var text = document.createTextNode(task.value);
    var span = document.createElement('span');
    span.append(text);
    listItem.append(this.createBtn('Complete', completeTaskFunc, task.id));
    listItem.append(span);
    listItem.append(this.createBtn('Delete', deleteTaskFunc, task.id));
    listItem.classList.add('container');
    span.classList.add(task.isComplete ? "is__complete" : "non__completed");
    return listItem;
  }
};

var taskCreator = new TaskCreator();
