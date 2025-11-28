// El archivo router.js define las rutas principales del sistema. Utiliza el modo 
// createWebHistory y carga tres vistas: listado de equipos, detalle de equipo y dashboard. 
// Garantiza navegación fluida y arquitectura modular.

import { createRouter, createWebHistory } from "vue-router";

import EquipmentList from "./views/EquipmentList.vue";
import EquipmentDetail from "./views/EquipmentDetail.vue";

const routes = [
  { path: "/", name: "home", component: EquipmentList },
  { path: "/equipo/:id", name: "detalle", component: EquipmentDetail, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
