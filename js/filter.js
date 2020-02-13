function Filter(arr, func) {
  this.btnAll = document.querySelector("#all");
  this.btnActive = document.querySelector("#active");
  this.btnCompleted = document.querySelector("#completed");
  this.filterState = 0;
  this.getFilteringArr();

  this.initListeners = function(callback, removeClass) {
    var that = this;
    this.btnAll.addEventListener("click", function() {
      that.filterState = 0;
      that.removeClass();
      callback();
    });
    this.btnActive.addEventListener("click", function() {
      that.filterState = 1;
      that.removeClass();
      callback();
    });
    this.btnCompleted.addEventListener("click", function() {
      that.filterState = 2;
      that.removeClass();
      callback();
    });
  }
}

Filter.prototype = {
  getFilteringArr: function(arr) {
    var filteredArr = [];
    switch (this.filterState) {
      case 0: 
        this.btnAll.classList.add('activeBtn');
        return arr;
      case 1: 
        this.btnActive.classList.add('activeBtn');
        arr.forEach(function(item) {
          if(item.isComplete === false) {
            filteredArr.push(item);
          };
        });
      break;
      case 2:
        this.btnCompleted.classList.add('activeBtn'); 
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
    this.btnAll.classList.remove('activeBtn');
    this.btnActive.classList.remove('activeBtn');
    this.btnCompleted.classList.remove('activeBtn');
  }
};
  
var filter = new Filter();