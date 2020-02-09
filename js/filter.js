var btnAll = document.querySelector('#all');
var btnActive = document.querySelector('#active');
var btnCompleted = document.querySelector('#completed');
var filterState = 0;

function Filter(arr, func) {
    if (filterState !==0) {
        arr.forEach( function(task) {
            if (filterState === 1) {
                task.isComplete = !task.isComplete;
            } else {
                task.isComplete = task.isComplete;
            }
        })
    };
    
    this.filterAll = function() {    
        filterState = 0;
        func();
    }

    this.filterActive = function() {    
        filterState = 1;
        func();
    }
    
    this.filterComplete = function() {    
        filterState = 2;
        func();
    }

    btnAll.addEventListener('click', filterAll); 
    btnActive.addEventListener('click', filterActive); 
    btnCompleted.addEventListener('click', filterComplete); 
    return arr;
}

var filter = new Filter();