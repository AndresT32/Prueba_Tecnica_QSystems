<!--
EquipmentDetail.vue muestra la información completa de un equipo seleccionado. 
Obtiene el ID desde la ruta, busca el equipo correspondiente y renderiza todos sus 
atributos: serial, marca, modelo, Invima, riesgo, sede, calibración y observaciones. 
Si cuenta con imagen, también se muestra. 
 -->
<template>
  <div v-if="eq" class="card">
    <!-- Botón para volver al listado de equipos -->
    <router-link to="/" class="button-small" style="margin-bottom:20px">
      ← Volver
    </router-link>
    <!-- Detalle completo del equipo -->
    <h2>{{ eq.nombre }} - {{ eq.marca }}</h2>

    <img v-if="eq.imagen" :src="eq.imagen" class="detail-img" />

    <h3>Información general</h3>
    <p><strong>Modelo:</strong> {{ eq.modelo }}</p>
    <p><strong>Tipo:</strong> {{ eq.tipo }}</p>
    <p><strong>Fabricante:</strong> {{ eq.fabricante }}</p>
    <p><strong>Fecha fabricación:</strong> {{ eq.fabricacion }}</p>

    <h3>Especificaciones eléctricas</h3>
    <p><strong>Voltaje:</strong> {{ eq.voltaje }}</p>
    <p><strong>Corriente:</strong> {{ eq.corriente }}</p>
    <p><strong>Potencia:</strong> {{ eq.potencia }}</p>

    <h3>Dimensiones</h3>
    <p><strong>Medidas:</strong> {{ eq.dimensiones }}</p>
    <p><strong>Peso:</strong> {{ eq.peso }}</p>

    <h3>Calibración</h3>
    <p><strong>Próxima calibración:</strong> {{ eq.proxima_calibracion }}</p>

    <h3>Observaciones</h3>
    <p>{{ eq.observacion }}</p>
  </div>
</template>

<script>
import { equipos } from "../data/equipos";

export default {
  computed: {
    eq() {
      return equipos.find(e => e.id == this.$route.params.id);
    }
  }
};
</script>
