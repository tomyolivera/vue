<template>
  <v-container>
    <h1 class="text-center cyan--text">Productos</h1>
    <cabecera-lista></cabecera-lista><br>
    <lista-productos></lista-productos>
  </v-container>
</template>

<script>

import { mapMutations, mapState } from "vuex";
import axios from 'axios';
import cabeceraLista from '../components/productos/cabeceraLista.vue';
import ListaProductos from '../components/productos/listaProductos.vue';

export default {
    components: { cabeceraLista, ListaProductos },
    name: 'Productos',
    methods: {
        ...mapMutations(['obtenerProductos']),
    },
    created(){
        this.obtenerProductos();
    }
}
</script>