function Paging() {
  this.renderPagination = function(length) {
    var num = Math.ceil(length / 5);
    if (num > 1) {
      this.makePageButtons(num);
    }
  };
  
  this.init = function() {
    this.container = document.querySelector("#pagingContainer");
  };

  this.makePageButtons = function(num) {
    while (this.container.lastChild) {
      this.container.removeChild(this.container.lastChild);
    }
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= num; i++) {
      var div = document.createElement('div');
      var a = document.createElement('a');
      a.setAttribute('href', i);
      var text = document.createTextNode(i);
      a.append(text);
      div.append(a);
      div.classList.add('pageNumber');
      fragment.append(div);
    }
    this.container.append(fragment);
  };

  // this.getPagingTodos = function(page, arr) {
  //   return arr.slice(( page - 1 ) * 5, page * 5)
  // }
}

var paging = new Paging();
paging.init();
