import { TaskManager } from "./TaskManager";

const myTaskManager = new TaskManager({
    username: "Alan",
});

myTaskManager.addTask("Strivers DSA Sheet");
myTaskManager.addTask("Zyntr local storage to clerk", new Date(Date.now() + 2 * 60 * 60 * 1000));
myTaskManager.showTasks();