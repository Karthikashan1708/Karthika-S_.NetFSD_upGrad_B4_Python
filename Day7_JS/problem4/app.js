import { addTask, deleteTask, listTasks } from "./taskManager.js";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const listBtn = document.getElementById("listBtn");
const taskList = document.getElementById("taskList");


/* DISPLAY TASKS USING listTasks() */
const renderTasks = async () => {

    const tasks = await listTasks();   // ⭐ compulsory usage

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete-btn">Delete</button>
        `;

        li.querySelector("button").addEventListener("click", async () => {
            await deleteTask(task);
            renderTasks();
        });

        taskList.appendChild(li);
    });
};


/* ADD TASK BUTTON */
addBtn.addEventListener("click", async () => {

    const task = input.value.trim();
    if (!task) return;

    await addTask(task);
    input.value = "";

    renderTasks();
});


/* LIST TASK BUTTON */
listBtn.addEventListener("click", () => {
    renderTasks();
});


/* INITIAL LOAD */
renderTasks();