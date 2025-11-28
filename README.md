# BioSalud – Landing Page (Ejercicio_1) 
Como parte de la prueba técnica para la Fábrica de Software de QSystem. Esta carpeta trata de representar la página principal del portal de gestión biomédica **BioSalud**, empleando una interfaz moderna, institucional y completamente responsiva sin utilizar frameworks externos.

## 🧩 Tecnologías utilizadas
- **HTML5** para la estructura semántica.
- **CSS3** para los estilos, usando Grid y Flexbox.
- **Google Fonts (Inter)** para una tipografía profesional.
- **Material Icons** para iconografía institucional.
- **Variables CSS** para escalabilidad y mantenibilidad.

## 📁 Estructura del proyecto

### Header
Implementado con **CSS Grid** para posicionar:
- El branding de BioSalud.
- El menú principal (Inicio, Servicios, Contacto).
- El logo institucional de QSystem.  
Incluye un fondo claro y un borde inferior para reforzar la identidad visual.

### Sección Hero
Compuesta por:
- Imagen de fondo institucional.
- Capa de oscurecimiento (overlay).
- Título, descripción y un CTA con icono.
El contenido se mantiene legible en cualquier tamaño de pantalla.

### Acciones rápidas
Grid de **seis tarjetas** (3×2) que representan acciones clave del sistema:
- Agregar equipo  
- Buscar equipo  
- Registrar alarma  
- Inventario  
- Reportes  
- Mantenimientos  
El grid se adapta automáticamente mediante breakpoints.

### Footer
Sección cerrada con mensaje institucional y año vigente.

## 📱 Responsividad
El diseño responsive se realiza con **Grid**, **Flexbox** y los siguientes breakpoints:
- **900px:**  
  - El header cambia a una columna.  
  - El menú se centra.  
  - Las tarjetas pasan a 2 columnas.
- **600px:**  
  - Las tarjetas se apilan en una sola columna.  
  - Tipografías ajustadas para mayor legibilidad.  
  - Se disminuye tamaño del título en el hero.

Ejemplo de breakpoint utilizado:
```css
@media (max-width: 900px) {
  .actions__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
# Gestor de Tareas – Interacción con DOM (Ejercicio_2)

Esta carpeta contiene una implementación sencilla y escalable de un **gestor dinámico de tareas**, construido únicamente con JavaScript nativo. El objetivo es presentar una solución clara, organizada y funcional que permita manipular el DOM de forma eficiente sin usar frameworks externos.

---

## 🧩 Tecnologías utilizadas
- **HTML5** para la estructura base.
- **CSS3** para la disposición y estilos de los elementos.
- **JavaScript Vanilla** para la lógica, manejo de estado y renderizado..
- **Módulo utilitario** para creación limpia de elementos dinámicos.

---

## 📁 Estructura del proyecto

### Entrada y acciones principales
La interfaz está compuesta por:
- Un campo de texto para capturar la tarea.
- Un botón para agregar nuevos elementos.
- Listado dinámico donde se renderizan las tareas creadas.

Toda la interacción se realiza mediante eventos de clic y teclas, manteniendo una experiencia fluida.

### Lógica en JavaScript
El archivo app.js gestiona toda la interacción del ejercicio utilizando JavaScript Vanilla:
- Un arreglo tasks funciona como estado centralizado para almacenar las tareas.
- Renderizado dinámico del listado, actualizando la interfaz según los cambios en el estado.
- Función utilitaria interna createElement() para crear nodos del DOM de forma más limpia.
- Funciones independientes y puras para:  
  - Agregar tareas.  
  - Marcar como completadas.
  - Eliminar tareas.
  - Renderizar el listado completo sin recargar la página.
- Sin uso de frameworks ni módulos externos, garantizando compatibilidad con ejecución local.

### Comportamiento dinámico
Cada elemento visual (botón, texto e indicadores) se genera en tiempo real según el estado interno.  
Al modificar una tarea, el DOM se vuelve a dibujar de forma controlada mediante una única función de renderizado.

---

## 📱 Responsividad
Los estilos están organizados para adaptarse correctamente a diferentes anchos manteniendo:
- Buena separación entre elementos.
- Tipografía legible.
- Accesibilidad y usabilidad en móviles.

---

## 🧠 Conceptos aplicados
- **Control de estado local** mediante un arreglo centralizado.
- **Manipulación estructurada del DOM** a través de JavaScript.
- **Delegación de eventos directa** sobre elementos generados dinámicamente.
- **Renderizado dinámico** sin uso de frameworks.
- **Código modular**, facilitando mantenibilidad y extensibilidad futura.

---

## ✨ Resultado
El usuario puede:
- Agregar tareas.
- Completar tareas.
- Eliminar tareas.
- Ver los cambios reflejados inmediatamente gracias al renderizado dinámico.

---
# Ejercicio_03 – Cálculo de Promedios

Esta carpeta contiene una solución en **JavaScript puro** para transformar un arreglo de estudiantes con sus notas y calcular el promedio de cada uno.  

---

## 🧩 Qué se usó
- **JavaScript Vanilla** para lógica y cálculo de promedios.  
- **Métodos de arrays**: `map()` para transformar el arreglo y `reduce()` para sumar notas.  
- **Node.js** para ejecutar el archivo en consola.  
- **toFixed(2)** para redondear los promedios a 2 decimales.  

---

## 🚀 Cómo ejecutar

1. Abrir **VS Code** en la carpeta del ejercicio.  
2. Abrir terminal integrada.  
3. Ejecutar:

```bash
node promedio.js
```
# Ejercicio_04 – Conversión de hora 24h a 12h

Este ejercicio en **JavaScript** recibe una hora en formato 24h (`"HH:MM"`) y la convierte a **formato 12h con AM/PM**, mostrando el resultado en consola.  

Se incluyen validaciones estrictas para asegurar que solo se procesen horas y minutos válidos.

---

## 🧩 Tecnologías utilizadas
- **JavaScript Vanilla** para lógica y validación de datos.  
- **Node.js** para ejecutar el archivo en consola.  

---

## 🧠 Conceptos aplicados

1. **Parsing**  
   - Se recibe un string `"HH:MM"` y se separa en hora y minutos usando `split(':')`.  
   - Después se convierten a números con `Number()` para poder operar matemáticamente.

2. **Manipulación de strings**  
   - Se reconstruye la hora en formato 12h usando template literals:  
     ```js
     `${hora12}:${minutosStr} ${periodo}`
     ```
   - Combina la hora calculada, los minutos originales y el indicador AM/PM en un string final.

3. **Condiciones complejas**  
   - Se valida que la hora esté entre `0` y `23` y los minutos entre `0` y `59`.  
   - Cualquier valor fuera de rango lanza un error:  
     ```js
     if (isNaN(hora) || isNaN(minutos) || hora < 0 || hora > 23 || minutos < 0 || minutos > 59)
     ```
   - Se usa lógica condicional para determinar AM/PM y la conversión a hora 12h:  
     ```js
     const periodo = hora >= 12 ? 'PM' : 'AM';
     const hora12 = hora % 12 === 0 ? 12 : hora % 12;
     ```

---

## 🚀 Cómo ejecutar

1. Abrir **VS Code** en la carpeta del ejercicio.  
2. Abrir la terminal integrada.  
3. Ejecutar el archivo:

```bash
node hora12h.js
```