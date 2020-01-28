var myTasksArray = ["Darragh", "Higgins", "sucks", "farts"];
function addTasks(task) {
    myTasksArray.push(task);
    console.log("Item " + task + " has been added to the array");
    return myTasksArray.length;
}
function listAllTasks() {
    // for(let i =0; i < myTasksArray.length; i++)
    // {
    //     console.log(myTasksArray[i]);
    // }
    console.log("Array contains the following items");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from array");
    }
    else {
        console.log("Item " + task + " not in array");
    }
    return myTasksArray.length;
}
addTasks("Complete Lab");
var numberOfTasks = addTasks("Eat breakfeast");
console.log("The number of tasks due today is " + numberOfTasks);
listAllTasks();
deleteTask("Complete Lab");
