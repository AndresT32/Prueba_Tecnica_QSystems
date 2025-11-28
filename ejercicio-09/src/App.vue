<!--
App.vue funciona como layout principal del sistema. Contiene la estructura base, 
incluye el encabezado y ejecuta <router-view> para renderizar dinámicamente las vistas 
según la ruta seleccionada. Mantiene la arquitectura modular de Vue y permite que cada 
vista sea independiente y escalable.

-->
<template>
  <div class="container">
    <!-- Encabezado principal -->
    <h1>Gestión de Equipos Médicos</h1>

    <!-- Render dinámica según ruta -->
    <router-view />
  </div>
</template>

<script>
/* 
  Componente raíz del proyecto.
  No contiene lógica: solo estructura y viewport dinámico.
*/
export default {};
</script>

