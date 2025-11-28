<!--- 
El componente Dashboard.vue genera métricas clave del inventario de equipos médicos a 
partir de la lista recibida por props. Se implementan propiedades computadas para 
calcular, de forma reactiva y eficiente: el total de equipos registrados, la cantidad de 
dispositivos clasificados como riesgo crítico (IIB y III) y los equipos cuya calibración 
vencerá en menos de 30 días. Esto permite un panel dinámico y actualizado sin lógica 
redundante ni recálculos innecesarios.

-->
<template>
  <div class="dashboard">

    <!-- Total de equipos registrados -->
    <div class="card card--stat">
      Total equipos: {{ equipos.length }}
    </div>

    <!-- Equipos con riesgo crítico -->
    <div class="card card--stat">
      Riesgo IIB / III: {{ criticos }}
    </div>

    <!-- Equipos próximos a calibrar -->
    <div class="card card--stat">
      Próxima calibración (< 30 días): {{ calibrarPronto }}
    </div>

  </div>
</template>

<script>
export default {

  // Lista completa de equipos recibida desde el componente padre
  props: { equipos: Array },

  computed: {

    // Filtra los equipos cuyo nivel de riesgo es crítico
    criticos() {
      return this.equipos.filter(e => e.riesgo === "IIB" || e.riesgo === "III").length;
    },

    // Determina cuántos equipos deben calibrarse en los próximos 30 días
    calibrarPronto() {
      const hoy = new Date();
      return this.equipos.filter(e => {
        const fecha = new Date(e.proxima_calibracion);
        const diasRestantes = (fecha - hoy) / (1000 * 60 * 60 * 24);
        return diasRestantes <= 30;
      }).length;
    }
  }
};
</script>
