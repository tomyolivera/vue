<template>
  <v-container>
    <h1 class="text-center">Home</h1>
    <p>Bienvenido Juan Perez!</p>
    
    <div class="py-3">
      <p>Ya tenés tu lista de productos!</p>
      <v-btn :color="colores.productos" dark class="my-3" to="productos">Ir a lista de productos</v-btn>
    </div>

  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['colores'])
  },
}

</script>