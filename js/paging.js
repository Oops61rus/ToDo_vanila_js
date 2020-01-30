function Paging() {
    this.renderPagination = function(length) {
        var num = Math.ceil(length / 5);
        if(num > 1) {
            this.makePageButtons(num);
        }
    }
    this.init = function() {
        this.container = document.querySelector("#pagingContainer");
    }

    this.makePageButtons = function(num) {
        while (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        var fragment = document.createDocumentFragment();
        for(var i = 1; i <= num; i++) {
            var div = document.createElement('div');
            var text = document.createTextNode(i);
            div.append(text);
            fragment.append(div)
        }
        this.container.append(fragment);
    }

    this.getPagingTodos = function(page, arr) {
        return arr.slice(( page - 1 ) * 5, page * 5)
    }
}

var page = new Paging();
page.init();