function Paging() {
  this.pageSize = 5;
  
  this.setPageSize = function() {
    var setSize = document.querySelector('.btn-pg');
    setSize.addEventListener('click', function() {
      this.pageSize = +document.querySelector('#paging').value;
      newApp.render();
      return this.pageSize;
    });
  }
  
  this.renderPagination = function(length) {
    while (this.container.lastChild) {
      this.container.removeChild(this.container.lastChild);
    }
    
    var num = Math.ceil(length / this.pageSize);
    if (length > this.pageSize) {
      this.makePageButtons(num);
    };
  };
  
  this.init = function() {
    this.container = document.querySelector("#pagingContainer");
  };

  this.activePage = 1;

  this.getPagingTodos = function(arr) {
    var x = arr.slice(( this.activePage - 1 ) * this.pageSize, this.activePage * this.pageSize);
    // debugger;
    return x;
  }

  this.init();
}

Paging.prototype = {
  makePageButtons: function(num) {
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= num; i++) {
      var div = document.createElement('div');
      var text = document.createTextNode(i);
      div.append(text);
      div.classList.add('pageNumber');
      div.addEventListener('click', this.handleClick.bind(this, i));
      fragment.append(div);
    }
    this.container.append(fragment);
  },

  handleClick: function(index) {
    this.activePage = index;
    newApp.render();
    // storage.setData('tasks', this.allTask);
  }
}

var paging = new Paging();
