 <!-- 
EquipmentList.vue muestra la lista completa de equipos médicos. Incluye un buscador 
reactivo que filtra por nombre o código en tiempo real mediante una computed property. 
Cada ítem se muestra con información clave y un botón que lleva al detalle del equipo 
mediante Vue Router. -->
<template>
  <div>
    <!-- Muestra el dashboard con métricas clave -->
    <Dashboard :equipos="equipos" />

    <div class="card">
      <h2>Listado de Equipos</h2>

      <input 
        class="input"
        v-model="search"
        placeholder="Buscar por nombre, marca o modelo..."
      />

      <ul class="list">
        <EquipmentItem 
          v-for="eq in equiposFiltrados"
          :key="eq.id"
          :equipo="eq"
        />
      </ul>
    </div>
  </div>
</template>

<script>
// Importa componentes y datos necesarios
import Dashboard from "../components/Dashboard.vue";
import EquipmentItem from "../components/EquipmentItem.vue";
import { equipos } from "../data/equipos";

export default {
  // Componente principal que muestra la lista de equipos y el dashboard
  components: { Dashboard, EquipmentItem },

  data() {
    return {
      search: "",
      equipos
    };
  },
  // Propiedad computada que filtra los equipos según el término de búsqueda
  computed: {
    equiposFiltrados() {
      return this.equipos.filter(eq =>
        `${eq.nombre} ${eq.marca} ${eq.modelo}`
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    }
  }
};
</script>
