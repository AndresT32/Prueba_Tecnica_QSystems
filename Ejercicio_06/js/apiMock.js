/**
 * Ejercicio_06 – Mini API Mock Local
 * Carga un archivo JSON local y permite buscar productos por ID.
 */

import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * Carga y parsea el archivo productos.json desde /data/
 * @returns {Array} Lista de productos
 */
function cargarProductos() {
  try {
    const ruta = resolve("../data/productos.json"); // ruta absoluta
    const data = readFileSync(ruta, "utf8");        // leer archivo
    return JSON.parse(data);                        // parsear JSON
  } catch (error) {
    console.error("Error cargando productos:", error.message);
    return null;
  }
}

/**
 * Busca un producto por ID
 * @param {number} id
 * @returns {string} Mensaje con el resultado
 */
function buscarProductoPorId(id) {
  const productos = cargarProductos();
  if (!productos) return "No se pudo cargar el archivo JSON.";

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return `Producto con ID ${id} no encontrado`;
  }

  return `El ${producto.nombre} cuesta ${producto.precio}`;
}

// Ejecución de pruebas
console.log(buscarProductoPorId(2));
console.log(buscarProductoPorId(1));
console.log(buscarProductoPorId(10));