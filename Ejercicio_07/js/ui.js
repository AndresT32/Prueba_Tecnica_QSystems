// ui.js --> Manejo de interfaz gráfica (UI).
// Todas las funciones aquí SOLO modifican el DOM, nunca los datos.

// Limpia TODAS las etiquetas de mensajes al usar otro botón
function clearAllMessages() {
  const ids = ["msgCreate", "msgUpdate", "msgDelete"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  });
}

// Mostrar mensaje en una etiqueta
// id: id del elemento <p>
// msg: texto
// color: rojo, verde, etc.
function showMessage(id, msg, color = "black") {
  clearAllMessages(); // limpia mensajes anteriores
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.color = color;
}

// Limpia el valor de un input
function clear(id) {
  const el = document.getElementById(id);
  if (el) el.value = "";
}

// Actualiza contadores de tareas
function updateCountersUI() {
  const list = getAllTasks();

  document.getElementById("countTotal").textContent =
    `Total: ${list.length}`;
  document.getElementById("countPend").textContent =
    `Pendientes: ${list.filter(t => t.status === "Pendiente").length}`;
  document.getElementById("countProg").textContent =
    `En progreso: ${list.filter(t => t.status === "En progreso").length}`;
  document.getElementById("countComp").textContent =
    `Completadas: ${list.filter(t => t.status === "Completada").length}`;
}

// Renderiza la lista de tareas
function renderTasksUI(list = null) {
  const data = list ?? getAllTasks();
  const container = document.getElementById("taskList");

  container.innerHTML = "";

  if (!data.length) {
    container.innerHTML = "<p>No hay tareas.</p>";
    return;
  }

  data.forEach(t => {
    const badge =
      t.status === "Pendiente" ? "pending" :
      t.status === "En progreso" ? "progress" : "completed";

    container.innerHTML += `
      <div class="task">
        <strong>${t.id}</strong>
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <span class="status-badge ${badge}">
          ${t.status}
        </span>
      </div>
    `;
  });
}
