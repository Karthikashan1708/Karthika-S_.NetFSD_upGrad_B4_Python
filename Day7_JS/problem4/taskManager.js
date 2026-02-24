import { saveTask, removeTask, fetchTasks } from "./storage.js";

/* ADD TASK */
export const addTask = async (task) => {
    return await saveTask(task);
};

/* DELETE TASK */
export const deleteTask = async (task) => {
    return await removeTask(task);
};

/* LIST TASKS (COMPULSORY FUNCTION) */
export const listTasks = async () => {
    const tasks = await fetchTasks();
    return tasks;
};