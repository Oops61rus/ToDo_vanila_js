function Paging() {
  this.pageSize = storage.getData('taskOnPage');
  this.activePage = storage.getData('activePage');
  this.container = document.querySelector("#pagingContainer");
  
  this.init = function(callback) {
    var self = this;
    var setSizeBtn = document.querySelector('#btn-pg');
    setSizeBtn.addEventListener('click', function() {
      self.pageSize = +document.querySelector('#paging').value;
      callback();
    });
  };
}

Paging.prototype = {
  makePageButtons: function(num, callback) {
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= num; i++) {
      var div = document.createElement('div');
      var text = document.createTextNode(i);
      div.append(text);
      div.classList.add('pageNumber');
      div.addEventListener('click', this.handleClick.bind(this, i, callback));
      div.classList.add(this.activePage === i ? 'activePg' : 'pg')
      fragment.append(div);
    }
    this.container.append(fragment);
  },
  
  renderPagination: function(length, callback) {
    while (this.container.lastChild) {
      this.container.removeChild(this.container.lastChild);
    }
    
    var num = Math.ceil(length / this.pageSize);
    if (length > this.pageSize) {
      this.makePageButtons(num, callback);
    };
  },
  
  getPagingTodos: function(arr, callback) {
    this.renderPagination(arr.length, callback);
    // if (arr.length == 0) {
      // this.activePage = this.activePage - 1;
      // callback();
    // };
    return arr.slice(( this.activePage - 1 ) * this.pageSize, this.activePage * this.pageSize);
  },
  
  handleClick: function(index, callback) {
    this.activePage = index;
    callback();
  }
}

var paging = new Paging();
