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