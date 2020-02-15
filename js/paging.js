function Paging() {
  this.pageSize = 5;
  this.activePage = 1;
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
  
  getPagingTodos: function(arr) {
    this.renderPagination(arr.length);
    return arr.slice(( this.activePage - 1 ) * this.pageSize, this.activePage * this.pageSize);
  },
  
  handleClick: function(index, callback) {
    this.activePage = index;
    callback();
  }
}

var paging = new Paging();
