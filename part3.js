"use strict";
exports.__esModule = true;
var ToDos = /** @class */ (function () {
    function ToDos() {
        this.myTasksArray = [];
    }
    ToDos.prototype.addTask = function (task) {
        this.myTasksArray.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.myTasksArray.length;
    };
    ToDos.prototype.listAllTasks = function () {
        console.log("Array contains the following items");
        this.myTasksArray.forEach(function (task) {
            console.log(task);
        });
    };
    ToDos.prototype.deleteTask = function (task) {
        var index = this.myTasksArray.indexOf(task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from array");
        }
        else {
            console.log("Item " + task + " not in array");
        }
        return this.myTasksArray.length;
    };
    return ToDos;
}());
var todo = new ToDos();
todo.addTasks("Complete Lab");
