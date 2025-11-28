// Función para crear elementos con clases y texto
function createElement(tag, className, text = "") {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

// Referencias
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Estado
let tasks = [];

// Render
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = createElement("li", "task-item");

        const text = createElement(
            "span",
            `task-text ${task.completed ? "completed" : ""}`,
            task.text
        );

        const actions = createElement("div", "task-actions");

        const btnComplete = createElement("button", "btn-action btn-complete", "✔");
        btnComplete.onclick = () => toggleComplete(index);

        const btnDelete = createElement("button", "btn-action btn-delete", "✖");
        btnDelete.onclick = () => deleteTask(index);

        actions.append(btnComplete, btnDelete);
        li.append(text, actions);
        taskList.append(li);
    });
}

// Agregar
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks();
}

// Completar
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Eliminar
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Eventos
addTaskBtn.onclick = addTask;

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
