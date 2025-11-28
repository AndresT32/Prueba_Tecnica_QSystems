/**
 * Convierte una hora en formato 24h ("HH:MM") a formato 12h con AM/PM
 * @param {string} hora24 - Hora en formato 24h, ejemplo "14:35"
 * @returns {string} Hora en formato 12h, ejemplo "2:35 PM"
 * @throws Error si la hora o minutos están fuera de rango
 */
function convertirHora12h(hora24) {
  // Separar horas y minutos del string
  const [horaStr, minutosStr] = hora24.split(':');

  // Convertir a números
  const hora = Number(horaStr);
  const minutos = Number(minutosStr);

  // Validación de horas y minutos
  if (
    isNaN(hora) || isNaN(minutos) || // debe ser numérico
    hora < 0 || hora > 23 ||         // horas válidas: 0-23
    minutos < 0 || minutos > 59      // minutos válidos: 0-59
  ) {
    throw new Error('Hora inválida. Formato aceptado: HH:MM de 00:00 a 23:59');
  }

  // Determinar AM o PM
  const periodo = hora >= 12 ? 'PM' : 'AM';

  // Convertir hora a formato 12h
  const hora12 = hora % 12 === 0 ? 12 : hora % 12;

  // Retornar hora en formato 12h
  return `${hora12}:${minutosStr} ${periodo}`;
}
/**
 * Ejemplos de uso y pruebas
 * Se envuelven en try/catch para mostrar errores de validación
 */
pruebas.forEach(hora => {
  try {
    const resultado = convertirHora12h(hora); // Convertir la hora
    console.log(resultado); // Mostrar el resultado en la consola
  } catch (e) {
    console.log(e.message); // Muestra el mensaje de error si la hora es inválida
  }
});
// Arreglo de horas para pruebas
const pruebas = ["00:15", "12:00", "14:35", "23:59", "24:00", "12:60"];