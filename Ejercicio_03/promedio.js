// Arreglo de estudiantes con sus notas
const estudiantes = [
  { nombre: 'Ana', notas: [3.2, 4.1, 3.9] },
  { nombre: 'Luis', notas: [2.8, 3.0, 3.5] },
  { nombre: 'Marta', notas: [4.5, 4.6, 4.9] },
];

/*
  Transformamos el arreglo original de estudiantes para calcular el promedio de cada uno.
  - usamos map() para crear un nuevo arreglo sin modificar el original.
  - dentro de map, usamos reduce() para sumar todas las notas.
  - luego dividimos por la cantidad de notas para obtener el promedio.
  - redondeamos a 2 decimales usando toFixed(2) y convertimos a Number.
*/
const estudiantesConPromedio = estudiantes.map((estudiante) => {
  // Calculamos la suma de las notas
  const sumaNotas = estudiante.notas.reduce((sum, value) => sum + value, 0);

  // Calculamos el promedio
  const promedio = sumaNotas / estudiante.notas.length;

  // Retornamos un nuevo objeto con el nombre y el promedio redondeado a 2 decimales
  return { nombre: estudiante.nombre, promedio: Number(promedio.toFixed(2)) };
});

// Mostramos el nuevo arreglo con los promedios en la consola
console.log('estudiantes: ', estudiantesConPromedio);
