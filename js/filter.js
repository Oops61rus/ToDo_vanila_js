function Filter(arr, func) {
  this.btnAll = document.querySelector("#all");
  this.btnActive = document.querySelector("#active");
  this.btnCompleted = document.querySelector("#completed");
  this.filterState = 0;

  this.initListeners = function(callback) {
    var that = this;
    this.btnAll.addEventListener("click", function() {
      that.filterState = 0;
      this.classList.add('greenBtn');
      callback();
    });
    this.btnActive.addEventListener("click", function() {
      that.filterState = 1;
      this.classList.add('greenBtn');
      callback();
    });
    this.btnCompleted.addEventListener("click", function() {
      that.filterState = 2;
      this.classList.add('greenBtn');
      callback();
    });
  }
}

Filter.prototype = {
  getFilteringArr: function(arr) {
    var filteredArr = [];
    switch (this.filterState) {
      case 0: return arr;
      case 1: arr.forEach(function(item) {
        if(item.isComplete === false) {
          filteredArr.push(item);
        };
      });
      break;
      case 2: arr.forEach(function(item) {
        if(item.isComplete === true) {
          filteredArr.push(item);
        };
      });
      break;
    }
    return filteredArr;
  }
};
  
var filter = new Filter();