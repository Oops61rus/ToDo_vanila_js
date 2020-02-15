function Storage() {
  this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  this.activePage = JSON.parse(localStorage.getItem('activePage')) || 1;
  this.activeFilter = JSON.parse(localStorage.getItem('activeFilter')) || 'all';
  this.taskOnPage = JSON.parse(localStorage.getItem('taskOnPage')) || 5;

  this.getData = function(key) {
    return this[key];
  }

  this.setData = function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

var storage = new Storage();
