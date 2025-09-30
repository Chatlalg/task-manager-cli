import type { Task, TaskManagerConfig, TaskStatus } from "./types"

export class TaskManager{
    private tasks: Task[] = [];
    private config: TaskManagerConfig;
    private nextId: number = 1;

    constructor(config:TaskManagerConfig){
        this.config=config;
        console.log(`Created a new task manager instance! Config: ${config.username}`)
    }
    
     addTask(name: string, deadline?: Date){
        const newTask: Task = {
            id: this.nextId,
            name: name,
            deadline: deadline,
            status: "pending",
            timestamp: new Date()
        }
        this.tasks.push(newTask);
        this.nextId++;
        return newTask;
    }

     showTasks(){
        this.tasks.forEach((task, index)=>{
            console.log(task.name,task.deadline ?? "(No deadline)");
        })
    }
}
