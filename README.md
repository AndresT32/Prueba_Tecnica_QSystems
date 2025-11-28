#  Prueba Técnica – Fábrica de Software QSystems

Este repositorio contiene la solución completa a los 10 ejercicios solicitados en la prueba técnica para aspirantes a la Fábrica de Software de QSystems.

El objetivo principal fue demostrar:

- Pensamiento lógico  
- Buenas prácticas  
- Claridad en el código  
- Capacidad de estructurar proyectos  
- Resolución progresiva (por ramas)  

Cada ejercicio fue trabajado en carpetas independientes, siguiendo la estructura solicitada.

---

# 🧠 Tecnologías y Dependencias Usadas

## Lenguajes y herramientas principales
- HTML5  
- CSS3  
- JavaScript ES6  
- Fetch API  
- JSON local  
- Git + GitHub  
- Java (para ejercicio 10)  

## Frameworks utilizados
- Vue 3 (Ejercicio 09)  
- Vite para scaffolding de proyecto Vue  
- Vue Router 4  

---

## Instalación de Vue (Ejercicio 09)

Comandos usados (exactos del terminal):

```bash
npm create vite@latest ejercicio-09 --template vue
npm install
npm install vue-router@4
```
📁 Estructura General del Repositorio

```
Prueba_Tecnica_QSystems/
│
├── ejercicio-01/
├── ejercicio-02/
├── ejercicio-03/
├── ejercicio-04/
├── ejercicio-05/
├── ejercicio-06/
├── ejercicio-07/
├── ejercicio-08/
├── ejercicio-09/  ← Vue + Vite + Router
└── ejercicio-10/  ← Java POO
```
Cada carpeta contiene su propio index.html, script.js, styles.css o archivos específicos necesarios.

# BioSalud – Landing Page (Ejercicio_1) 
Como parte de la prueba técnica para la Fábrica de Software de QSystem. Esta carpeta trata de representar la página principal del portal de gestión biomédica **BioSalud**, empleando una interfaz moderna, institucional y completamente responsiva sin utilizar frameworks externos.

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

## Responsividad
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


## 🧠 Conceptos aplicados
- **Control de estado local** mediante un arreglo centralizado.
- **Manipulación estructurada del DOM** a través de JavaScript.
- **Delegación de eventos directa** sobre elementos generados dinámicamente.
- **Renderizado dinámico** sin uso de frameworks.
- **Código modular**, facilitando mantenibilidad y extensibilidad futura.

---

##  Resultado
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

# Ejercicio_05 – Filtrado múltiple de productos

Este ejercicio implementa un algoritmo de filtrado de productos por **rango de precio** y **categoría opcional** utilizando **JavaScript**.

---

## 📌 Descripción

- Se utiliza una **clase transitoria (`ProductosDTO`)** que representa un filtro temporal para los productos.  
- La clase recibe los valores de **precio mínimo y máximo obligatorios** y una categoría opcional.  
- Incluye **validaciones** para asegurar que los precios sean correctos y que el mínimo no sea mayor que el máximo.  
- La función `filtrarProductos` aplica el filtro a un array de productos, devolviendo únicamente los que cumplen los criterios.

---

## 🔹 Manejo de errores

- Se implementa un manejo de errores **centralizado** mediante una función `ejecutarFiltros`.  
- Esto permite capturar y mostrar cualquier error generado al crear filtros o aplicar el filtrado, como:
  - Precios no proporcionados.
  - Precio mínimo mayor que el máximo.

---

## 💡 Conceptos aplicados

- **Clase transitoria**: objeto temporal para pasar parámetros de filtro.  
- **Filtrado avanzado**: combinando condiciones de precio y categoría.  
- **Manejo seguro de errores**: evita que un fallo detenga la ejecución de todos los casos de prueba.
## 🔹 Ejecución

Para probar el ejercicio en **consola**, utiliza Node.js ejecutando el archivo:

```bash
node filtrado.js
```

# **Ejercicio 06 – Mini API Mock**

## 📌 Descripción

Este ejercicio implementa una **mini API simulada** usando JavaScript y un archivo JSON local.
El objetivo es cargar datos desde un archivo externo y realizar búsquedas eficientes por ID, retornando un mensaje con el nombre y precio del producto.

---

## 📁 Estructura del Proyecto

```
Ejercicio_06/
│
├── data/
│   └── productos.json
│
└── js/
    └── apiMock.js
```

---

## 📦 Archivo JSON (`data/productos.json`)

Contiene un listado básico de productos:

```json
[
  { "id": 1, "nombre": "Producto A", "precio": 5000 },
  { "id": 2, "nombre": "Producto B", "precio": 7500 }
]
```

---

## 🧠 Lógica Implementada (`js/apiMock.js`)

### 🔹 `cargarProductos()`

Función encargada de leer el archivo JSON local.

* Usa `fs/promises` para la lectura asincrónica.
* Convierte el contenido en un arreglo JS.
* Implementa manejo de errores para evitar fallos si el archivo no existe o está mal formado.

### 🔹 `buscarProductoPorId(id)`

Realiza la búsqueda del producto solicitado.

* Usa `.find()` para hacer la búsqueda de forma eficiente.
* Retorna un mensaje como:
  **"El Producto B cuesta 7500"**
* Si no existe el producto, retorna:
  **"Producto con ID X no encontrado"**

---

## ▶️ Ejecución

Dentro de la carpeta del ejercicio:

```bash
node js/apiMock.js
```

# **Ejercicio 07 - Gestión de tareas**

Esta carpeta implementa un Aplicativo web sencilla hecha en **HTML, CSS y JavaScript**, que permite gestionar tareas (crear, actualizar, eliminar y filtrar) con almacenamiento local. El sistema funciona abriendo únicamente el archivo `index.html`.

## ¿Qué hace el software?

- Crea tareas con: título, descripción y estado inicial.
- Genera IDs automáticos (T001, T002…).
- Actualiza el estado de una tarea mediante su ID.
- Elimina tareas por ID.
- Filtra por ID o estado.
- Muestra contadores: total, pendientes, en progreso, completadas.
- Guarda toda la información en **localStorage usando JSON**, así los datos no se pierden al cerrar el navegador.

---

## ¿Cómo está estructurado?

```

/proyecto
│
├── index.html          → Estructura principal de la interfaz
│
├── css/
│   └── styles.css      → Estilos, diseño visual y layout responsivo
│
└── js/
    ├── store.js        → Gestión de datos:
    │                     - Arreglo de tareas
    │                     - Generación de IDs
    │                     - Persistencia con JSON + localStorage
    │
    ├── ui.js           → Capa visual:
    │                     - Renderizado de tareas en pantalla
    │                     - Contadores
    │                     - Mensajes y limpieza de inputs
    │
    └── app.js          → Lógica central:
                          - Eventos de los botones
                          - Validaciones
                          - Conexión entre store.js y ui.js


```

El JavaScript está dividido en tres archivos para separar responsabilidades:

- **store.js** → gestiona el arreglo de tareas, genera IDs, guarda y carga desde localStorage.  
- **ui.js** → todo lo visual: mostrar tareas, limpiar inputs, mensajes, contadores.  
- **app.js** → conecta la UI con la lógica; recibe eventos de los botones y usa `store.js` y `ui.js`.

Esta separación hace el código más ordenado, mantenible y fácil de entender.


## ¿Cómo funciona la lógica?

1. **Crear tarea:**  
   - Se leen los datos del formulario.  
   - Se genera un ID incremental.  
   - Se guarda la tarea en un arreglo y en localStorage (JSON).  
   - Se vuelve a renderizar la lista.

2. **Actualizar tarea:**  
   - Se busca la tarea por ID.  
   - Se cambia su estado.  
   - Se guarda y se actualiza la UI.

3. **Eliminar tarea:**  
   - Se elimina por ID y se actualiza storage y pantalla.

4. **Filtros:**  
   - Se toma la lista completa.  
   - Se aplica filtro por ID, estado o ambos.  
   - Se muestra el resultado sin alterar los datos originales.

5. **Contadores:**  
   - Se recalculan cada vez que cambia la lista o los filtros.

El estado completo de la aplicación siempre está sincronizado con localStorage mediante `JSON.stringify()` y `JSON.parse()`.

---

## ¿Cómo se ejecuta?

1. Descargar el proyecto.  
2. Abrir `index.html` en el navegador.  
3. No requiere servidor ni configuración adicional.

# Ejercicio 09 – Implementación Vue.js con Vite + Vitality

Para este ejercicio se construyó una pequeña interfaz en **Vue 3**, inicializada con **Vite**, enfocado en demostrar el manejo de:

- **Props**
- **Computed Properties**
- **Bindings reactivos**
- **Enrutamiento (Vue Router)**
- **Vistas desacopladas**
- **Componentización reutilizable**

El objetivo del ejercicio era crear un componente capaz de recibir datos, mostrarlos dinámicamente y filtrarlos en tiempo real.  
Sin embargo, para ampliar la dificultad y demostrar arquitectura, se implementó un **mini–sistema de inventario médico**, compuesto por lista, detalle, dashboard y rutas dinámicas.

---

## 🧱 Arquitectura del Ejercicio
```
ejercicio-09/
│
├── src/
│ ├── App.vue ← Layout principal
│ ├── main.js ← Inicialización Vue + Router
│ ├── router/
│ │ └── index.js ← Configuración de rutas
│ ├── components/
│ │ ├── EquipmentItem.vue ← Item reutilizable en listas
│ │ └── Dashboard.vue ← Métricas del inventario
│ ├── views/
│ │ ├── EquipmentList.vue ← Vista principal: lista filtrable
│ │ └── EquipmentDetail.vue ← Vista de detalle por ID
│ └── data/
│ └── equipos.js ← Base de datos local

```
Esta estructura modular permite:

- Separar vistas de componentes
- Delegar responsabilidades (SOLID)
- Escalar el flujo del sistema sin romper el diseño inicial

---

## ¿Qué se implementó ?

El PDF pedía:

✔ Componente que recibe lista por props  
✔ Filtrar usuarios en tiempo real  
✔ Uso de estado reactivo  
✔ Uso de computed properties  

Aunque el reto hablaba de "usuarios", aquí se implementó una lista de **equipos médicos**, pero la lógica es exactamente la misma.

este cumple el reto porque:

- La lista **sí llega por props** a los componentes hijos.
- El filtrado se hace mediante una **computed property reactiva**, que evita recálculos innecesarios.
- Se usan **bindings reactivos** (`v-model`).
- Se agregó **Vue Router** para navegación dinámica.
- Se implementaron **componentes reutilizables**.

---

## 🧠 Cómo funciona la solución 

## 1. **EquipmentList.vue** → Lista filtrable por nombre o marca

Esta vista:

- Recibe la lista completa de equipos.
- Implementa un buscador con `v-model`.
- Filtra en tiempo real usando una computed property.
- Renderiza cada equipo mediante `<EquipmentItem />`.


¿Por qué se usa computed?
Porque Vue memoriza la operación y solo recalcula cuando el estado cambia → más eficiente y cumple el requisito del reto.

## 2. EquipmentItem.vue → Componente con Props + Router
Este componente:
- Usa props para recibir un equipo específico.
- No maneja estado (componente puro → más fácil de testear).
- Usa router-link para navegación dinámica hacia el detalle.
Esto cumple el criterio de bindings reactivos y props obligatorias del ejercicio.
## 3. EquipmentDetail.vue → Vista de detalle dinámico por ID

Esta vista logra:
- Capturar el ID desde la URL (/equipo/:id)
- Buscar el registro correspondiente en la lista
- Renderizar todos los atributos del equipo
- Mostrar imagen si existe

## 4. Dashboard.vue
Este componente recibe la lista por props y genera:
- Total de equipos
- Cantidad en riesgo crítico (IIB, III)
- Equipos cuya calibración vence en < 30 días

## 5. App.vue → Layout principal del sistema

- Contiene el encabezado y estructura general.
- Incluye <router-view /> para render dinámico.
- Permite escalar otras vistas sin cambiar la base.

# Ejercicio 10 – Java (POO + Consola)

Para este ejercicio se implementó un sistema básico de gestión de estudiantes utilizando **Programación Orientada a Objetos (POO)** en Java.  
La solución incluye un modelo `Student` y una aplicación de consola (`Main`) que permite realizar operaciones CRUD simples.

---

## 📘 ¿Qué se implementó?

### ✔ Clase Student
Modelo que encapsula:

- `nombre`
- `id`
- `List<Double> notas`

Incluye métodos de negocio:

- `addNota()` → agrega notas con validación (0–5)  
- `deleteNota()` → elimina una nota por índice  
- `getPromedio()` → calcula el promedio de forma segura  

La clase protege su estado interno usando encapsulación y devolviendo copias de la lista de notas.

---

### ✔ Clase Main
Aplicación de consola con menú interactivo que permite:

1. Registrar estudiante  
2. Agregar nota  
3. Calcular promedio  
4. Eliminar nota  
5. Eliminar estudiante  
6. Listar estudiantes  

Para almacenar los estudiantes se usa un `Map<String, Student>`, permitiendo acceso rápido por ID.

---

## 🧠 ¿Por qué se hizo así?

- Separación clara entre **modelo** (`Student`) y **lógica de aplicación** (`Main`).
- Uso de colecciones dinámicas (`ArrayList`, `HashMap`) para flexibilidad.
- Métodos simples y legibles, alineados con la POO básica solicitada.
- Estructura que facilita ampliaciones (p. ej. persistencia futura).

---

# 🏁 Conclusión General

A lo largo de los 10 ejercicios se trabajó con un enfoque consistente en **buenas prácticas de programación**, claridad en la estructura del código y pensamiento lógico aplicado. Cada problema fue interpretado desde la perspectiva más cercana a un entorno real de desarrollo, priorizando:

- Código limpio, modular y fácil de mantener  
- Separación clara de responsabilidades  
- Validación de datos y manejo básico de errores  
- Uso correcto de estructuras de control y colecciones  
- Implementación de componentes reutilizables cuando fue necesario  
- Escalabilidad en la organización de carpetas y módulos  
- Evitar lógica duplicada mediante funciones y computed properties  

Para los ejercicios en JavaScript se procuró mantener funciones puras, evitar mutaciones innecesarias y aplicar patrones simples que facilitan extender cada solución.  
En el ejercicio con Vue (09) se diseñó una arquitectura modular, escalable y completamente reactiva, integrando props, computed properties, enrutamiento y componentes, demostrando una interpretación más profunda del reto original.  
En el ejercicio de Java (10) se aplicaron principios de POO, encapsulación y diseño orientado a objetos para crear un sistema funcional y extensible.
