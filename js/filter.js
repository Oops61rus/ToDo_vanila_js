var btnAll = document.querySelector('#all');
var btnActive = document.querySelector('#active');
var btnCompleted = document.querySelector('#completed');

var filterState = 0;

function filter() {
    var arr = newApp.allTask;
    if (filterState !==0) {
        arr = newApp.allTask.filter( function(task) {
            return filterState === 1 ? !task.isComplete : task.isComplete;
        })
    };
    return arr;
}

function filterAll() {
    filterState = 0;
    newApp.render();
}

function filterActive() {
    filterState = 1;
    newApp.render();
}

function filterComplete() {
    filterState = 2;
    newApp.render();
}

btnAll.addEventListener('click', filterAll); 
btnActive.addEventListener('click', filterActive); 
btnCompleted.addEventListener('click', filterComplete); 