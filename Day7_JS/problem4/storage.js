let tasks = [];

/* PROMISE STORAGE */

export const saveTask = (task) => {
    return new Promise(resolve => {
        setTimeout(() => {
            tasks.push(task);
            resolve(tasks);
        }, 500);
    });
};

export const removeTask = (task) => {
    return new Promise(resolve => {
        setTimeout(() => {
            tasks = tasks.filter(t => t !== task);
            resolve(tasks);
        }, 500);
    });
};

export const fetchTasks = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(tasks);
        }, 500);
    });
};