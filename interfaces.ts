export interface tasksInterface
{
    addTask(task: string): number;
    listallTasks():void;
    deleteTask(task:string): number;
    myTasksArray: Array<string>;
}



