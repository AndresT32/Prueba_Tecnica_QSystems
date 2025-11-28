// store.js
// Manejo del estado global + localStorage

const STORAGE_KEY = "qs_tasks_v1";
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let counter = tasks.length;

// Guardar en localStorage
function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Crear ID
function createId() {
  counter++;
  return "T" + String(counter).padStart(3, "0");
}

// Obtener todas las tareas
function getAllTasks() {
  return [...tasks];
}

// Agregar
function addTaskStore(task) {
  tasks.push(task);
  saveStore();
}

// Actualizar estado
function updateTaskStore(id, state) {
  const t = tasks.find(x => x.id === id);
  if (!t) return false;
  t.status = state;
  saveStore();
  return true;
}

// Eliminar
function deleteTaskStore(id) {
  const i = tasks.findIndex(t => t.id === id);
  if (i === -1) return false;
  tasks.splice(i, 1);
  saveStore();
  return true;
}
