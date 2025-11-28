// app.js
// Controlador principal: maneja eventos y coordina UI ↔ Store.

document.addEventListener("DOMContentLoaded", () => {

  // Listeners
  document.getElementById("btnAdd").addEventListener("click", onAdd);
  document.getElementById("btnUpdate").addEventListener("click", onUpdate);
  document.getElementById("btnDelete").addEventListener("click", onDelete);
  document.getElementById("btnFilter").addEventListener("click", onFilter);

  // Render inicial
  renderTasksUI();
  updateCountersUI();
});

// Crear tarea
function onAdd() {
  // lee campos
  const title = document.getElementById("titleInput").value.trim();
  const desc = document.getElementById("descInput").value.trim();
  const statusSelect = document.getElementById("createStatus");
  const initialStatus = statusSelect ? statusSelect.value : "Pendiente";

  if (!title)
    return showMessage("msgCreate", "Debe ingresar un título", "red");

  const task = {
    id: createId(),
    title,
    description: desc || "(sin descripción)",
    status: initialStatus
  };

  addTaskStore(task);

  // Mensaje y limpieza
  showMessage("msgCreate", `Tarea creada con ID: ${task.id}`, "green");
  clear("titleInput");
  clear("descInput");
  // resetear selector al valor por defecto (Pendiente)
  if (statusSelect) statusSelect.value = "Pendiente";

  renderTasksUI();
  updateCountersUI();
}

// Actualizar estado
function onUpdate() {
  const id = document.getElementById("updateId").value.trim();
  const state = document.getElementById("updateStatus").value;

  const ok = updateTaskStore(id, state);

  if (!ok)
    return showMessage("msgUpdate", "ID no encontrado", "red");

  clear("updateId");

  showMessage("msgUpdate", "Estado actualizado correctamente", "green");
  renderTasksUI();
  updateCountersUI();
}

// Eliminar tarea
function onDelete() {
  const id = document.getElementById("deleteId").value.trim();

  const ok = deleteTaskStore(id);
  if (!ok)
    return showMessage("msgDelete", "ID no existe", "red");

  clear("deleteId");

  showMessage("msgDelete", "Tarea eliminada", "green");
  renderTasksUI();
  updateCountersUI();
}


// Filtros
function onFilter() {
  const id = document.getElementById("searchId").value.trim();
  const st = document.getElementById("filterStatus").value;

  let list = getAllTasks();

  if (id) list = list.filter(t => t.id === id);
  if (st !== "all") list = list.filter(t => t.status === st);

  renderTasksUI(list);
  updateCountersUI();
}
