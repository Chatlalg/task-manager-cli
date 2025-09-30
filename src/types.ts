/**
 * Task Properties
 * 1. Name of the task
 * 2. Date and time added 
 * 3. Completion status - completed, dropped, pending
 * 4. Deadline of the task
 */

export type TaskStatus = "completed" | "dropped" | "pending";

export interface Task{
    id: number;
    name: string;
    timestamp: Date;
    status: TaskStatus;
    deadline?: Date;
}

export interface TaskManagerConfig{
    username: string;
    filename?: string;
    autoSave?: boolean;
    defaultDeadline?: Date;
}
