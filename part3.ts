import {tasksInterface} from './interfaces';

class ToDos implements tasksInterface
{
    myTasksArray: Array<string> = [];

     addTask(task: string): number 
     {
        this.myTasksArray.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.myTasksArray.length
    }

     listAllTasks(): void 
     {
        console.log("Array contains the following items")
        this.myTasksArray.forEach(function (task) {
            console.log(task)
        })
    
    }

     deleteTask(task: string): number 
     {
        let index: number = this.myTasksArray.indexOf(task);
        if (index > -1) 
        {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from array");
        }
        else 
        {
            console.log("Item " + task + " not in array");
        }
        return this.myTasksArray.length;
    }
}

let todo = new ToDos();
todo.addTask("Complete Lab");