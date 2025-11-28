<template>
  <li class="item">
    <div>
      <strong>{{ equipo.nombre }}</strong> ({{ equipo.marca }})<br/>
      Serial: {{ equipo.serial }}<br/>
      Sede: {{ equipo.sede }}<br/>
      Riesgo: <span class="badge">{{ equipo.riesgo }}</span>
    </div>

    <router-link :to="'/equipo/' + equipo.id" class="button-small">
      <svg viewBox="0 0 24 24">
        <path fill="white" d="M10 17l5-5-5-5v10z"></path>
      </svg>
      Ver detalle
    </router-link>
  </li>
</template>

<script>
export default {
  props: { equipo: Object }
};
</script>
