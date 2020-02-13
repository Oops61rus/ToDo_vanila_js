function Storage(value) {
  this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  this.getData = function(key) {
    return this[key];
  }

  this.setData = function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

var storage = new Storage();
