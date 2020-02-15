function Filter(arr, func) {
  this.filterState = storage.getData('activeFilter');
  this.filterContainer = document.querySelector('#filterContainer');
  
  this.map = {
    all: null,
    active: null,
    completed: null
  };

  this.init = function(callback) {    
    var fragment = document.createDocumentFragment();
    var self = this;
    Object.keys(this.map).forEach(function(key) {
      var button = document.createElement('button');
      var text = document.createTextNode(key);
      button.id = key;
      button.append(text);
      button.classList.add(key === self.filterState ? 'activeBtn' : 'btn')
      button.addEventListener('click', self.handlerFilter.bind(self, key, callback));
      self.map[key] = button;
      fragment.append(button);
    });
    this.filterContainer.append(fragment);
  }
}

Filter.prototype = {
  handlerFilter: function(key, callback) {
    this.filterState = key;
    paging.activePage = 1;
    this.removeClass();
    this.map[key].classList.add('activeBtn');
    callback();
  },

  getFilteringArr: function(arr) {
    var filteredArr = [];
    switch (this.filterState) {
      case 'all': 
        return arr;
      case 'active': 
        arr.forEach(function(item) {
          if(item.isComplete === false) {
            filteredArr.push(item);
          };
        });
      break;
      case 'completed':
        arr.forEach(function(item) {
          if(item.isComplete === true) {
            filteredArr.push(item);
          };
        });
      break;
    }
    return filteredArr;
  },
  
  removeClass: function() {
    var self = this;
    Object.keys(this.map).forEach(function(key) {
      self.map[key].classList.remove('activeBtn');
    })
  }
};

var filter = new Filter();