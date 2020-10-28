function Sort() {
  this.activeSort = storage.getData("sortType");
  this.sortBtn = document.querySelector("#sort");

  this.init = function (arr, callback) {
    this.checkClassToggle();
    var self = this;
    self.sortBtn.addEventListener("click", function () {
      self.sortBtn.classList.toggle("up");
      self.renderReverse(arr);
      callback();
    });
  };
}

Sort.prototype = {
  checkClassToggle: function () {
    if (this.activeSort === "up") {
      this.sortBtn.classList.add("up");
    }
  },

  renderReverse: function (arr) {
    if (this.sortBtn.classList.contains("up")) {
      storage.setData("sortType", "up");
    } else {
      storage.setData("sortType", null);
    }
    arr.reverse();
  },
};

var sort = new Sort();
