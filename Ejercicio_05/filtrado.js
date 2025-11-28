/**
 * Ejercicio_05 – Filtrado múltiple de productos
 * 
 * Se implementa una función que filtra productos por rango de precio
 * y categoría opcional usando objetos como parámetro único.
 */

/** Array de productos disponible */
const productos = [
  { nombre: 'Café', precio: 1500, categoria: 'bebida' },
  { nombre: 'Arepa', precio: 2000, categoria: 'comida' },
  { nombre: 'Té', precio: 1000, categoria: 'bebida' },
  { nombre: 'Sandwich', precio: 5500, categoria: 'comida' },
];

/** Clase que representa los filtros aplicados a los productos */
class ProductosDTO {
  /**
   * @param {Object} filtros - Objeto con filtros
   * @param {number} filtros.precioMin - Precio mínimo obligatorio
   * @param {number} filtros.precioMax - Precio máximo obligatorio
   * @param {string} [filtros.categoria] - Categoría opcional
   */
  constructor({ precioMin, precioMax, categoria } = {}) {
    if (precioMin == null || precioMax == null) {
      throw new Error('El campo precio es obligatorio');
    }
    if (precioMin > precioMax) {
      throw new Error('El precio mínimo no puede ser mayor que el máximo');
    }

    this.precioMin = precioMin;
    this.precioMax = precioMax;
    this.categoria = categoria;
  }
}

/**
 * Función que filtra productos según el objeto de filtros
 * @param {ProductosDTO} filtroProducto - Objeto con criterios de filtrado
 * @returns {Array} - Productos que cumplen los filtros
 */
function filtrarProductos(filtroProducto) {
  const { precioMin, precioMax, categoria } = filtroProducto;

  return productos.filter(
    ({ precio, categoria: cat }) =>
      precio >= precioMin &&
      precio <= precioMax &&
      (!categoria || categoria === cat)
  );
}

/** Ejemplos de uso con manejo de errores */
function ejecutarFiltros() {
  try {
    const filtro1 = new ProductosDTO({ precioMin: 1500, precioMax: 3700 });
    console.log('Filtrado por precio 1500-3700:', filtrarProductos(filtro1));

    const filtro2 = new ProductosDTO({ precioMin: 1000, precioMax: 4000, categoria: 'bebida' });
    console.log('Filtrado por precio 1000-4000 y categoría bebida:', filtrarProductos(filtro2));

    // Ejemplo que lanza error: No se proporciona precioMin ni precioMax
    const filtroInvalido = new ProductosDTO({ categoria: 'bebida' });
    console.log(filtrarProductos(filtroInvalido));
  } catch (e) {
    console.log('Error al filtrar productos:', e.message);
  }
}

// Ejecutar ejemplos
ejecutarFiltros();
